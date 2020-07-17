import React from 'react'
import './size.style.scss'

const Size = () => {
    return (
        <div className='size-container'>
            <span className='size_text' >Sizes</span>
            <ul className="size">
                <li className="size_num">37</li>
                <li className="size_num">38</li>
                <li className="size_num">39</li>
                <li className="size_num">40</li>
                <li className="size_num">41</li>
            </ul>
        </div>
    )
}

export default Size;
