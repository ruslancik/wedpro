import React from 'react'

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
            <LogoContainer {...otherProps}/>
              <MenuContainer>
                <MenuItem><NavLink to='/new-arrivals'> New Arrivals </NavLink></MenuItem>
                <MenuItem><NavLink to='/store'> Store </NavLink></MenuItem>
                <MenuItem><NavLink to='/video'> Videos </NavLink></MenuItem>
                <MenuItem><NavLink to='/blog'> Blogs </NavLink></MenuItem>
            </MenuContainer> 
            <CartLogin>
                <CartIconContainer {...otherProps}/>
                <LoginButton {...otherProps}>
                   Log In
                </LoginButton>
            </CartLogin>
        </NavDesk>
        </div>
        
    )
}

export default Navbar;

