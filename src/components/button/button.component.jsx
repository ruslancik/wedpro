import React from 'react'
import arrow from '../../assets/arrow.svg'
import './button.style.scss'

const Button = ({text, classForPos}) => {
    return (
        <div className={`button ${classForPos}`}>
            <a className='arrow' href="#">{text}<img src={arrow} alt="button right arrow"/></a>
        </div>
    )
}

export default Button
