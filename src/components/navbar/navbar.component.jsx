import React from 'react'
import navLogo from '../../assets/nav-logo.svg'
import cart from '../../assets/cart.svg'
import './navbar.scss'
import arrDown from '../../assets/arr-down.svg'

//style 

import {
    NavDesk,
    MenuContainer,
    MenuItem,
    NavLink,
    LoginButton,
    CartLogin,
    LogoContainer,
    CartIconContainer
} from './navbar.style'

const Navbar = ({...otherProps}) => {

   return (
        <div>
        <NavDesk {...otherProps}>
            <LogoContainer/>
              <MenuContainer>
                <MenuItem><NavLink to='/new-arrivals'> New Arrivals </NavLink></MenuItem>
                <MenuItem><NavLink to='/store'> Store </NavLink></MenuItem>
                <MenuItem><NavLink to='/video'> Videos </NavLink></MenuItem>
                <MenuItem><NavLink to='/blog'> Blogs </NavLink></MenuItem>
            </MenuContainer> 
            <CartLogin>
                <CartIconContainer/>
                <LoginButton>
                   Log In
                </LoginButton>
            </CartLogin>
        </NavDesk>

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
                            <label htmlFor="group">Store<span><img src={arrDown} alt=""/></span></label>
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
        </div>
        
    )
}

export default Navbar;
