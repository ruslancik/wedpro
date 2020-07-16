import React from 'react'
import './hero.style.scss'
import Navbar from '../navbar/navbar.component'
import Button from '../button/button.component'
import HeroContent from '../hero-content/hero-content.component'

const Hero = ({text}) => {



    return (
        <div className='hero'>
            <Navbar />
            <div className="ball-1"></div>
            <div className="ball-2"></div>
            <div className="vector2"></div>
            <div className="vector1"></div>
            <div className="ellipse-pink"></div>
            <div className="ellipse-blur"></div>
            <div className="shoes-hero"></div>
            <div className="blur1"></div>
            <div className="blur2"></div>
            <div className='circle-container'></div>
            <Button text='Enjoy discounts'/>
            <HeroContent/>
        </div>
    )
}

export default Hero;