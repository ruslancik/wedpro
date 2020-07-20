import React, {useEffect}from 'react'
import './hero.style.scss'
import Navbar from '../navbar/navbar.component'
import Button from '../button/button.component'
import HeroContent from '../hero-content/hero-content.component'
import group from '../../assets/group.png'

const Hero = ({text, classForPos}) => {

    useEffect(() => {
        var leftgear = document.getElementById("rotate");
            
        window.addEventListener("scroll", function() {
            leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
        });
      });
    

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
            <div className='circle-container'>
                <img id='rotate' src={group} alt="circle"/>
            </div>
            <div className="newest-shoes">Newest Shoes</div>
            <Button classForPos='btn-top' text='Enjoy discounts'/>
            <Button  classForPos='btn-bottom' text='See all shoes'/>
            <HeroContent/>
        </div>
    )

    }
export default Hero;