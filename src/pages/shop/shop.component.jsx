import React, { Component } from 'react'
import './shop.style.scss'
import Navbar from '../../components/navbar/navbar.component'

class Shop extends Component {

    render() {
        return (
            <div className='shop'>
                <Navbar logo/>
            </div>
        )
    }
}

export default Shop;
