import React, { useState } from 'react'
import { Button , Modal} from 'react-bootstrap'
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    //handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //direct to home page
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully!")
        localStorage.removeItem("cart");
        Navigate(from, {replace:true})
    }
  return (
    <div className='modalCARD'>
        <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>
        <Modal show={show} onHide={handleClose} animation={false} className='modal fade' centered>
            <div className="model-dialog">
                <h5 className="p-5 text-center mb-3">Select Your Payment Method</h5>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="tabs mt-3">
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <a href="#visa" id='visa-tab' data-toggle="tab" role='tab' aria-controls="visa" aria-selected={activeTab === "visa"} onClick={() => handleTabChange("visa")} className='{`nav-link ${activeTab === "visa" ? "active" : ""}`}'>
                                        <img src="https://i.imgur.com/sB4jftM.png" width={80} alt="" />
                                    </a>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <a href="#paypal" id='paypal-tab' data-toggle="tab" role='tab' aria-controls="paypal" aria-selected={activeTab === "visa"} onClick={() => handleTabChange("paypal")} className='{`nav-link ${activeTab === "paypal" ? "active" : ""}`}'>
                                        <img src="https://i.imgur.com/yK7EDD1.png" width={80} alt="" />
                                    </a>
                                </li>
                            </ul>

                            {/* contents */}
                            <div className="tab-content" id='myTabContent'>
                                {/* visa content */}
                                <div className={`tab-pane fade ${activeTab === "visa" ? "active show" : ""}`} id="visa" role="tabpanel" aria-labelledby="visa-tab">
                                    {/* visa tab content */}
                                    <div className="mt-4 mx-4">
                                        <div className="text-center">
                                            <h5>Credit Cart</h5>
                                        </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' required />
                                                <span>Cardholder Name</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min={1} max={16} className='form-control' required />
                                                <span>Card Number</span>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min={1} max={12} className='form-control' required />
                                                    <span>Expiration Data</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min={1} max={3} className='form-control' required />
                                                    <span>CVV</span>
                                                </div>
                                            </div>
                                            <div className="px-5 pay">
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* paypal content */}
                                <div className={`tab-pane fade ${activeTab === "paypal" ? "active show" : ""}`} id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                                <div className="mt-4 mx-4">
                                        <div className="text-center">
                                            <h5>Paypal Acount Info</h5>
                                        </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' required />
                                                <span>Enter Your Email</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number' min={1} max={16} className='form-control' required />
                                                <span>Your Name</span>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min={1} max={16} className='form-control' required />
                                                    <span>Extra Info</span>
                                                </div>
                                            </div>
                                            
                                            <div className="px-5 pay">
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* payment desclaimier */}
                            <p className='mt-3 px-4 p-Disclaimer'><em>Payment Desclaimer:</em> In no event shall payment or partial payment by owner for any material or service</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckoutPage