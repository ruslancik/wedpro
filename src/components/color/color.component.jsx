
import React from 'react'
import './color.style.scss'
import {ColorBadge} from './color.style'

const Color = ({value}) => {

    const handleClick = (value) => {
        return document.querySelector('#image').src=value;
    }

    return (
        <div className='color' >
            <span className='color-choice' >Color Choise</span>
            <ul className="color-selection">
                <li className="color-selection_item item-1" onClick={() => handleClick(value[0])}>
                    <ColorBadge color='#0051C9' />
                    <ColorBadge color='#FFB443' />
                </li>                
                <li className="color-selection_item item-1" onClick={() => handleClick(value[1])}>
                    <ColorBadge color='#0051C9' />
                    <ColorBadge color='#262E4D' />
                </li>                
                <li className="color-selection_item item-1" onClick={() => handleClick(value[2])}>
                    <ColorBadge color='#FFFFFF' />
                    <ColorBadge color='#362A52' />
                </li>                
            </ul>
        </div>
    )
}

export default Color;