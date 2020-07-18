import React from 'react'
import './color.style.scss'

const Color = () => {
    return (
        <div className='color'>
            <span className='color-choice' >Color Choise</span>
            <ul className="color-selection">
                <li className="color-selection_item item-1">
                    <span></span>
                    <span></span>
                </li>
                <li className="color-selection_item item-2">
                    <span></span>
                    <span></span>
                </li>
                <li className="color-selection_item item-3">
                    <span></span>
                    <span></span>
                </li>
                
            </ul>
        </div>
    )
}

export default Color;
