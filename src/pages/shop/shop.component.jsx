import React, { Component } from 'react'
import './shop.style.scss'
import Navbar from '../../components/navbar/navbar.component'
import sliderShoes1 from '../../assets/slider-shoes1.svg';
import logo from '../../assets/nike-logo_torquese.svg'
import Size from '../../components/size/size.component'
import Rate from '../../components/rate/rate.component'

import {
    Container,
    ColorBadge,
    ColorContent,
    ColorSelContainer,
    ColorItemContainer
} from '../../components/color/color.style'


class Shop extends Component {

    render() {
        return (
            <div className='shop'>
                <Navbar light logo cart border/>
                <div className="shop-product">
                    <img src={sliderShoes1} className="shop-product_image"/>
                    <div className="shop-product_detail">
                        <img src={logo} alt="nike logo"/>
                        <p>
                            <span className='brand'>NIKE</span><br/>
                            <span className='model'>Air Max 2090</span>
                        </p>
                        <Size/>
                        <Rate/>
                        <Container >
                        <ColorContent>Color Choise</ColorContent>
                            <ColorSelContainer>
                                <ColorItemContainer>
                                    <ColorBadge color='#424D7C' />
                                    <ColorBadge color='#F76F6A' />
                                </ColorItemContainer>                
                                <ColorItemContainer>
                                    <ColorBadge color='#FFFFFF' />
                                    <ColorBadge color='#3D76D9' />
                                </ColorItemContainer>                               
                            </ColorSelContainer>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;
