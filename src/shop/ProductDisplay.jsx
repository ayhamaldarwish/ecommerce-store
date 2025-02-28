import React,{ useState} from 'react'
import { Link } from 'react-router-dom';

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const ProductDisplay = ({item}) => {
    const {id, name, price, ratingsCount, seller, quantity, img} = item;
    const[prequantity, setQuantity] = useState(quantity);
    const[coupon , setCoupon] = useState('');
    const [size, setSize] = useState('Select Size');
    const [color, setColor] = useState('Select Color');

    const handleDecrease = () => {
        const newQuantity = prequantity - 1;
        setQuantity(newQuantity);
    }
    const handleincrease = () => {
        const newQuantity = prequantity + 1;
        setQuantity(newQuantity);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img:img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color
        }
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = existingCart.findIndex(item => item.id === id);
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }
        //update the local storage
        localStorage.setItem('cart', JSON.stringify(existingCart));

        //reset from fields
        setQuantity(1);
        setSize('Select Size');
        setColor('Select Color');
        setCoupon('');
    }

  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <span>{desc}</span>
        </div>
        {/* acrt copmonent */}
        <div>
            <form onSubmit={handleSubmit} style={{position:"relative"}}>
                <div style={{ gap:"20px"}}>
                    {/* select size */}
                    <div style={{marginTop:"10px" ,width:"48%"}}>
                        <select value={size} onChange={(e) => setSize(e.target.value)}>
                            <option>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </div>
                    {/* select color */}
                    <div style={{width:"50%" ,position:"absolute", right:"0" , top:"0", width:"48%"}}>
                        <select value={color} onChange={(e) => setColor(e.target.value)}>
                            <option>Select Color</option>
                            <option>red</option>
                            <option>blue</option>
                            <option>green</option>
                            <option>yellow</option>
                            <option>black</option>
                        </select>
                    </div>
                </div>
                <div style={{display:"flex", gap:"10px", alignItems:"center", marginTop:"10px"}}>
                    {/* cart plus minus */}
                    <div className='cart-plus-minus' >
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} />
                        <div className='inc qtybutton' onClick={handleincrease}>+</div>
                    </div>

                    {/* coupon field */}
                    <div style={{width:"67%"}}>
                        <input type="text" placeholder='Enter Discount Code' value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                    </div>
                </div>
                {/* btn section */}
                    <div style={{display:"flex", gap:"123px", alignItems:"center", marginTop:"10px"}}>
                        <button type='submit' className='lab-btn' >
                            <span>Add to Cart</span>
                        </button>
                        <Link to="/cart-page" className='lab-btn bg-primary' >
                            <span>Check Out</span>
                        </Link>
                    </div>
            </form > 
        </div>
    </div>
  )
}

export default ProductDisplay