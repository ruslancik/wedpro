import React from 'react'
import navLogo from '../../assets/nav-logo.svg'
import cart from '../../assets/cart.svg'
import './navbar.scss'


const Navbar = () => {



    return (
        <div className='navbar'>
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
        </div>
        
    )
}

export default Navbar;
