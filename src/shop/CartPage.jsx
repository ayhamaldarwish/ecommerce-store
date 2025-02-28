import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png';
import CheckoutPage from './CheckoutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // fetch cart item from loacl storage
        const storageCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storageCartItems);
    }, []);

        //calculate total price
        const calculateTotalPrice = (item) => {
            return item.price * item.quantity;
        };

        //handle quantity increase
        const handleIncrease = (item) => {
            item.quantity += 1;
            setCartItems([...cartItems]);

            //update local storage with new cart items
            localStorage.setItem('cart', JSON.stringify(cartItems));
            };

        //handle quantity decrease
        const handleDecrease = (item) => {
            if (item.quantity > 1) {
                item.quantity -= 1;
                setCartItems([...cartItems]);
                //update local storage with new cart items
                localStorage.setItem('cart', JSON.stringify(cartItems));
                }
        };

        // handle item remove
        const handleRemoveItem = (item) => {
            const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);
            //update new cart
            setCartItems(updatedCart);
            updateLocalStorage(updatedCart);
        };

        const updateLocalStorage = (cart) => {
            localStorage.setItem('cart', JSON.stringify(cart));
        };

    //cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
        }, 0);

    //order total
    const orderTotal = cartSubtotal;

  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
        <div className="shop-cart padding-tb">
            <div className="container">
                <div className="section-wrapper">
                    {/* cart top */}
                    <div className="cart-top">
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-prodact'>Product</th>
                                    <th className='cat-price'>Price</th>
                                    <th className='cat-quantity'>Quantity</th>
                                    <th className='cat-toprice'>Total</th>
                                    <th className='cat-edit'>Edit</th>
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody>
                                {
                                    cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-item cat-product">
                                                <div className="p-thumb">
                                                    <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className='cat-price'>$ {item.price}</td>
                                            <td className="cat-quantity">
                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                    <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                    <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                </div>
                                            </td>
                                            <td className='cat-toprice'>$ {calculateTotalPrice(item)}</td>
                                            <td className="cat-edit">
                                                <a href="#" onClick={()=> handleRemoveItem(item)}>
                                                    <img src={delImgUrl} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* cart top ends */}

                    {/* cart buttom */}
                    <div className="cart-bottom">
                        {/* checkout box */}
                        <div className='cart-checkout-box'>
                            <form className='coupon'>
                                <input className='cart-page-input-text' type="text" name="coupon" id='coupon' placeholder="Coupon code...." />
                                <input type="submit" value={"Apply Coupon"} />
                            </form>
                            <form className='cart-checkout'>
                                <input type="submit" value="Update Cart" />
                                <div>
                                    <CheckoutPage />
                                </div>
                            </form>
                        </div>
                        {/* checkout box end */}

                        {/* shoping cart */}
                        <div className="shipping-box">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="calculate-shiping" style={{position: "relative"}}>
                                        <h3>Calculate Shiping</h3>
                                        <div className="outline-select">
                                            <select>
                                                <option value="uk">United Kingdom(UK)</option>
                                                <option value="us">United States(USA)</option>
                                                <option value="bd">Bangladesh</option>
                                                <option value="pak">Pakisthan</option>
                                                <option value="ind">India</option>
                                                <option value="np">Nepal</option>
                                            </select>
                                            {/* <span className="select-icon">
                                                <i className="icofont-rounded-down"></i>
                                            </span> */}
                                        </div>
                                        <div className="outline-select shipping-select" style={{width: "45%", marginTop: "9px"}}>
                                            <select>
                                                <option value="uk">New York</option>
                                                <option value="us">London</option>
                                                <option value="bd">Dhaka</option>
                                                <option value="pak">Korachi</option>
                                                <option value="ind">New Delhi</option>
                                            </select>
                                        </div>
                                        <input type="text" style={{width: "45%", position: "absolute", top:"99px", marginLeft: "350px" }} name='postalCade' id='postalCade' className='cart-page-input-text' placeholder='PostalCode/ZIP*' />
                                        <button type='submit' style={{backgroundColor:"#F16126", marginTop:"10px", color:"white"}}>Update Address</button>
                                    </div>
                                </div>
                                {/* right section */}
                                <div className="col-md-6 col-12">
                                    <div className="cart-overview">
                                        <h3>Cart Totals</h3>
                                        <ul className="lab-ul">
                                            <li style={{borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" , alignItems: "center" , marginBottom:"8px"}}>
                                                <span className='pull-left'>Cart Subtotal</span>
                                                <p style={{color: "#F16126"}}>$ {cartSubtotal}</p>
                                            </li>
                                            <li style={{borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" , alignItems: "center", marginBottom:"8px"}}>
                                                <span className='pull-left'>Shipoing and Handling</span>
                                                <p style={{color: "#F16126"}}>Free Shipping</p>
                                            </li>
                                            <li style={{borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" , alignItems: "center", marginBottom:"8px"}}>
                                                <span className='pull-left'>Order Total</span>
                                                <p style={{color: "#F16126"}}>$ {orderTotal.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage