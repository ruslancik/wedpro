import React, { Component } from 'react'
import './shop.style.scss'
import Navbar from '../../components/navbar/navbar.component'
import MobileNav from '../../components/mobile-nav/mobile-nav.component'
import sliderShoes1 from '../../assets/12454.png';
import logo from '../../assets/nike-logo_torquese.svg'
import Size from '../../components/size/size.component'
import Rate from '../../components/rate/rate.component'
import {connect} from 'react-redux'
import {addItemAction, removeItemAction} from '../../redux/cart.action'

import {
    Container,
    ColorBadge,
    ColorContent,
    ColorSelContainer,
    ColorItemContainer
} from '../../components/color/color.style'


class Shop extends Component {
    state = {
        quantity : 0,
        show: false
    }

    addItem = () => {
        this.setState({show : true})
        setTimeout(() => this.setState({show: false}), 2000);
        this.setState(prevState => {
            if(this.props.cart > 0) {
                return {quantity: prevState.quantity + this.props.cart}
            }
            return prevState;
        })
    }

    render() {
        return (
            <div className='shop'>
                { this.state.quantity <= 0 ? null :
                    <div className="cart-badge" ><span>{this.state.quantity}</span></div>
                }
                <Navbar light logo cart border/>
                <MobileNav />
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
                        <span className='line'></span>
                        <div className='cart-group'>
                            <div className="count-button">
                                <span className='decrease' onClick={this.props.removeItemAction}>-</span>
                                <span className='number'>{this.props.cart}</span>
                                <span className='increase' onClick={this.props.addItemAction}>+</span>
                            </div>
                            <button className="add-btn" onClick={this.addItem}>Add to bag</button>
                            {
                                this.state.show && this.props.cart > 0 ?
                                <span className='message'>{this.props.cart} items added to the bag</span>
                                : null
                              
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
  })

const mapDispatchToProps = dispatch => ({
    addItemAction : () => dispatch(addItemAction()),
    removeItemAction : () => dispatch(removeItemAction())
  }) 

  export default connect(mapStateToProps, mapDispatchToProps)(Shop);