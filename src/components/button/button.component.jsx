import React from 'react'
import arrow from '../../assets/arrow.svg'
import './button.style.scss'

const Button = ({text, classForPos}) => {
    return (
        <div className={`button ${classForPos}`}>
            <a className='arrow' href="#">
                {text}
                <svg width="47" height="19" viewBox="0 0 47 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.6667 0.99998L45 9.33331L36.6667 17.6666" stroke="white" strokeWidth="2"/>
                <path d="M0 9L45 9" stroke="white" strokeWidth="2"/>
                </svg>
            </a>
        </div>
    )
}

export default Button;
