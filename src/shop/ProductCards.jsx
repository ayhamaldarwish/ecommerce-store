/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCards.css" // استيراد ملف الأنماط
import Ratting from "../components/Ratting"

const ProductCards = ({ GridList, products }) => {
    return (
        <div className={`shop-product-warp row justify-content-center ${GridList ? "grid" : "list"}`}>
            {
                products.map((product, i) => (
                    <div key={i} className={GridList ? "col-lg-4 col-md-6 col-12" : "col-12"}>
                        <div className={GridList ? "product-item position-relative overflow-hidden" : "product-list-item position-relative overflow-hidden"}>
                            {/* product image */}
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" className="w-100 product-img" />
                                </div>

                                {/* product action links */}
                                <div className="product-action-link d-flex justify-content-center align-items-center">
                                    <Link to={`/shop/${product.id}`} className="action-btn">
                                        <i className='icofont-eye'></i>
                                    </Link>
                                    <a href="#" className="action-btn">
                                        <i className="icofont-heart"></i>
                                    </a>
                                    <Link to="/cart-page" className="action-btn">
                                        <i className='icofont-cart-alt'></i>
                                    </Link>
                                </div>

                            </div>

                            {/* product content */}
                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p className="productRating">
                                    <Ratting />
                                </p>
                                <h6>{product.price}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCards;
