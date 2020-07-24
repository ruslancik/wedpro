import styled,{css}from 'styled-components'
import {Link} from 'react-router-dom'
import logoWhite from '../../assets/nav-logo.svg'
import logoDark from '../../assets/nav-logo2.svg'
import cartWhite from '../../assets/cart.svg'
import cartDark from '../../assets/cart-dark.svg'


const darkNavbar = css`
    color : white;
`

const lightNavbar = css`
    color : #283664;
`
const getNavStyles = props => {
    return props.light ? lightNavbar : darkNavbar;
  };

const logoIconWhite = css`
  background: url(${logoWhite}) no-repeat;
`

const logoIconDark = css`
background: url(${logoDark}) no-repeat;
`
const getLogoColor = props => {
  return props.cart ? logoIconDark : logoIconWhite;
};
 

const cartIconWhite = css`
  background: url(${cartWhite}) no-repeat;
`

const cartIconDark = css`
background: url(${cartDark}) no-repeat;
`
const getCartColor = props => {
  return props.logo ? cartIconDark : cartIconWhite;
};


const borderLight = css`
border: 0.2rem solid rgba(255,255,255, .25);
`

const borderDark = css`
border: 0.2rem solid rgba(40, 54, 100, .25);
`
const getBorderColor = props => {
  return props.border ? borderDark : borderLight;
};




export const NavDesk = styled.div `
    width: 143rem;
    height: 9.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15.6rem;
    background:transparent;
    ${getNavStyles}
    @media screen and (max-width: 600px) {
    display: none;

    }
` 

export const MenuContainer = styled.ul`
    display: inline-block;
    color:inherit;

`

export const MenuItem= styled.li`
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    vertical-align: middle;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-right: 6.4rem;
    color:inherit;
`


export const NavLink= styled(Link)`

    text-decoration: none;
    text-transform: uppercase;
    color:inherit;


`
export const LoginButton= styled.button`
    text-decoration: none;
    text-transform: uppercase;
    width: 14.4rem;
    height: 6rem;
    ${getBorderColor}
    box-sizing: border-box;
    border-radius: 3rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.7rem;
    background:transparent;
    outline: none;
    cursor: pointer;
    color:inherit;

`

export const CartLogin = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color:inherit;

`

export const imgContainer = styled.div`
        width: 7.2rem;
        height: 2.6rem;
        color:inherit;
`
export const LogoContainer = styled.div`
        ${getLogoColor}
        background-size: contain;
        width: 7.2rem;
        height: 2.6rem;
        color:inherit;                 
`
export const CartIconContainer = styled.div`
        ${getCartColor}
        background-size: contain;
        margin-right: 5rem;
        width: 1.8rem;
        height: 2rem;
        color:inherit;
`
