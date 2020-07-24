import React from 'react'
import './product.style.scss'
import sliderShoes1 from '../../assets/slider-shoes1.svg';
import sliderShoes2 from '../../assets/slider-shoes2.svg';
import nikeLogo from '../../assets/nav-logo.svg';
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        
        <div className='product' >
            <div className="product-item item1">
                <p className='product-item_text p1' >Air Max <br/><span>2090</span></p>
                <img className='product-item_img' src={sliderShoes1} alt='Nike shoes'/>
                <a className='product-item_btn' href="#">Shop now</a>
                <img className='product-item_logo' src={nikeLogo} alt="Nike"/>
            </div>
            <div className="product-item item2">
                <p className='product-item_text p2'>Air Force 1 <br/><span>React</span></p>
                <img className='product-item_img' src={sliderShoes2} alt="Nike shoes"/>
                <a className='product-item_btn' href="">Shop now</a>
                <img className='product-item_logo' src={nikeLogo} alt="Nike"/>
            </div>
        </div>
        
    )
}

export default Product;
