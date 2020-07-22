import React, {useEffect}from 'react'
import Navbar from '../navbar/navbar.component'
import Button from '../button/button.component'
import HeroContent from '../hero-content/hero-content.component'
import group from '../../assets/group.png'

//style 
import {
    HeroContainer,
    MotionBallRed,
    MotionBallBlue,
    VectorPink,
    VectorYellow,
    EllipsePink,
    EllipseBlur,
    Blur,
    MotionBlur,
    HeroShoes,
    NewestShoes,
    RotateImage,
    ImageContainer,
    EllipseShadow,
    Shadow
} from './header.style'

const Header = ({text, classForPos}) => {

    useEffect(() => {
        var leftgear = document.getElementById("rotate");
            
        window.addEventListener("scroll", function() {
            leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
        });
      });
    

    return (
        <HeroContainer>
            <Navbar/>
            <MotionBallRed/>
            <MotionBallBlue/>
            <VectorYellow/>
            <VectorPink/>
            <EllipsePink/>
            <EllipseBlur/>
            <HeroShoes/>
            <HeroContent/>
            <EllipseShadow/>
            <Shadow/>
            <Blur/>
            <MotionBlur/>
            <RotateImage>
                <ImageContainer id='rotate' src={group}/>
            </RotateImage>
            <NewestShoes>Newest Shoes</NewestShoes>
            <Button classForPos='btn-top' text='Enjoy discounts'/>
            <Button  classForPos='btn-bottom' text='See all shoes'/>
        </HeroContainer>
    )

    }
export default Header;