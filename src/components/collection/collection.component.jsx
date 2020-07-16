import React from 'react'
import './collection.style.scss'
import shoes1 from '../../assets/nike-shoe1.svg'
import nikeRunner from '../../assets/nike-runner.svg'
import nikeLogo from '../../assets/nike-logo_torquese.svg'
import leftArr from '../../assets/left-arr.svg'
import rightArr from '../../assets/right-arr.svg'

const Collection = () => {
    return (
        <div className='collection'>
            <div className="collection_image-container">
                <span className='ellipse_mini-small'></span>
                <span className='ellipse_mini-big'></span>
                <img src={shoes1} alt="nike shoes"/>
                <span className="shadow_one"></span>
                <span className="shadow_two"></span>
            </div>
               <div className="collection_details">
                   <div className='first_grid'>
                        <img className='nike_logo' src={nikeLogo} alt="nike logo"/>
                        <img className='nike_runner' src={nikeRunner} alt="nike runnerclick"/>
                        <span>Best fabric is used to <br/> produce these</span>
                        <div className='btn-container'>
                            <a className="btn btn-left"><img className='left-arr' src={leftArr}/></a>
                            <a className="btn btn-right"><img className='right-arr' src={rightArr}/></a>
                        </div>
                </div>
                <div className="second_grid">
                    <div className="size-container">
                        <span className='size-text' >Sizes</span>
                        <ul className="size">
                            <li className="size_num">37</li>
                            <li className="size_num">38</li>
                            <li className="size_num">39</li>
                            <li className="size_num">40</li>
                            <li className="size_num">41</li>
                        </ul>
                    </div>
                    <div className="review-container">
                        <span className='review-text'>Reviews</span>
                        <ul className="review">
                            <li className="review_star">s</li>
                            <li className="review_star">s</li>
                            <li className="review_star">s</li>
                            <li className="review_star">s</li>
                            <li className="review_star">s</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
