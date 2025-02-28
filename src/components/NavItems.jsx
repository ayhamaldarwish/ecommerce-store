import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    //authInfo
    /* const {user} = useContext(AuthContext);
    console.log(user); */

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
            {/* <!-- header top start --> */}
            <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to="/login"><span>Login</span></Link>
                    </div>
                </div>
            </div>

            {/* <!-- logo for small devices --> */}
            <div className="logo d-md-none">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            {/* <!-- header bottom --> */}
            <div className="header-bottom d-none d-md-block">
                <div className="container">
                    <div className="header-wrapper">
                        {/* <!-- logo for larger devices --> */}
                        <div className="logo-search-acte">
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>

                        {/* <!-- menu area --> */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            {/* sign in and log in */}
                            <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Login</Link>

                            {/* <!-- menu Toggler --> */}
                            <div 
                                className={`header-bar d-lg-none  ${menuToggle ? 'active' : ''}`} 
                                onClick={() => setMenuToggle(!menuToggle)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/* social toggler */}
                            <div className='ellepsis-bar d-lg-none' onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavItems