import React from 'react'
import navLogo from '../../assets/nav-logo.svg'
import cart from '../../assets/cart.svg'
import './navbar.scss'


const Navbar = () => {



    return (
        <div className='navbar'>
            <img src={navLogo} alt="nike logo"/>
              <ul className="menu">
                <li className="menu_item">New Arrivals</li>
                <li className="menu_item">Store</li>
                <li className="menu_item">Videos</li>
                <li className="menu_item">Blogs</li>
            </ul> 
            <div className='cart_login'>
                <img src={cart} alt="cart"/>
                <button className='btn'>
                   Log In
                </button>
                
            </div>
        </div>
        
    )
}

export default Navbar;
