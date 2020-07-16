import React from 'react'
import arrow from '../../assets/arrow.svg'
import './button.style.scss'

const Button = ({text}) => {
    return (
        <div className='button'>
            <a className='arrow' href="#">{text}<img src={arrow} alt="button right arrow"/></a>
        </div>
    )
}

export default Button
