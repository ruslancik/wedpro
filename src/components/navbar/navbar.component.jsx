import React from 'react'
import navLogo from '../../assets/nav-logo.svg'
import cart from '../../assets/cart.svg'
import './navbar.scss'


const Navbar = () => {

   return (
        <>
        <nav className='navbar'>
            <img src={navLogo} alt="nike logo"/>
              <ul className="menu">
                <li className="menu_item"><a href=""> New Arrivals </a></li>
                <li className="menu_item"><a href=""> Store </a></li>
                <li className="menu_item"><a href=""> Videos </a></li>
                <li className="menu_item"><a href=""> Blogs </a></li>
            </ul> 
            <div className='cart_login'>
                <img src={cart} alt="cart"/>
                <button className='btn'>
                   Log In
                </button>
            </div>
        </nav>
        <div className='navbar-m-container'>


        <nav className="mobile-menu">
            <img src={navLogo} alt="nike logo"/>
            <input type="checkbox" id="checkbox" className="mobile-menu__checkbox"/>
            <label htmlFor="checkbox" className="mobile-menu__btn">
                <div className="mobile-menu__icon1"></div>
                <div className="mobile-menu__icon2"></div>
                <div className="mobile-menu__icon3"></div>
                </label>

            <div className="mobile-menu__overlay">
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item"><a href="#" className="mobile-menu__link new-arrival">New Arrivals</a></li>
                    <li className="mobile-menu__item"><a href="#" className="mobile-menu__link store">
                            <input id="group" type="checkbox" hidden />
                            <label htmlFor="group">Store<span>+</span></label>
                            <div className="group-list">
                                <a href="#">Item1</a>
                                <a href="#">Item2</a>
                            </div>  
                    </a></li>
                    <li className="mobile-menu__item"><a href="#" className="mobile-menu__link video">Videos</a></li>
                    <li className="mobile-menu__item"><a href="#" className="mobile-menu__link blog">Blogs</a></li>
                </ul>
            </div>
        </nav>
        </div>
        </>
        
    )
}

export default Navbar;
