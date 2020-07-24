import React from 'react'
import './latest-deals.style.scss'
import Button from '../button/button.component'
import arrDown from '../../assets/arr-down.svg'
import arrUp from '../../assets/arr-up.svg'

const LatestDeals = () => {
    return (
        <div className='deal'>
                <div className="see-all-shoes">
                    <Button classForPos='blue' text='See all shoes'/>
                    <p>
                    Clean, modern, comfortable <br/> and easy to wear
                    </p>
                </div>
                <div className="latest-deal">
                    <p className="date">02 / 04</p>
                    <p className="latest">Latest</p>
                    <p className="deals">Deals</p>
                    <p className="content">
                    Best fabric is used to produce <br/>
                    these summer
                    </p>
                    <div className="banner-dropdown">
                        <input type="radio" name="option"/>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
                <div className="pink-banner"></div>
                <div className="men-full"></div>
                <div className="blue-banner"></div>
                <div className="torg-banner"></div>
                <div className="men-leg"></div>
                <div className="men-back"></div>
                <div className="orange-banner"></div>
                <div className="see-all-shoes2">
                    <p><a href="">See all shoes</a></p>
                </div>
        </div>
    )
}

export default LatestDeals;
