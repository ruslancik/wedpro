import React from 'react'
import './banner.style.scss'
import leftArr from '../../assets/left-arr.svg'
import rightArr from '../../assets/right-arr.svg'
import arrDown from '../../assets/arr-down.svg'
import arrUp from '../../assets/arr-up.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <span className="banner-text">Explore</span>
                
                <div className="banner-dropdown">
                    <input type="radio" name="option"/>
                    <img className="toggle icon icon-arrow-down" src={arrDown}/>
                    <img className="toggle icon icon-arrow-up" src={arrUp}/>
                    <span className="placeholder">Summer</span>
                    <label className="option">
                        <input type="radio" name="option"/>
                        <span className="title">Summer</span>
                    </label>
                    <label className="option">
                        <input type="radio" name="option"/>
                        <span className="title">Fall</span>
                    </label>
                    <label className="option">
                        <input type="radio" name="option"/>
                        <span className="title">Winter</span>
                    </label>
                    <label className="option">
                        <input type="radio" name="option"/>
                        <span className="title">Spring</span>
                    </label>
            </div>

            </div>
            <div className="banner-arrow">
                <a className="btn btn-left"><img className='left-arr' src={leftArr}/></a>
                <a className="btn btn-right"><img className='right-arr' src={rightArr}/></a>
            </div>
        </div>
    )
}

export default Banner
