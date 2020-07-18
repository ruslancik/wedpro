import React from 'react'
import './footer.style.scss'
import logo from '../../assets/nav-logo.svg'

const Footer = () => {
    return (
        <>
        <div className='footer' >
             <div className='footer-column_1'>
                <img src={logo} alt="Nike Logo"/> 
             </div>
             <div className="footer-column_2">
                 <ul className="footer-list">
                     <li className="footer-list_item"><a href="#"> GIFT CARDS </a></li>
                     <li className="footer-list_item"><a href="#"> PROMOTIONS  </a></li>
                     <li className="footer-list_item"><a href="#"> FIND A STORE </a></li>
                     <li className="footer-list_item"><a href="#"> SIGN UP FOR EMAIL </a></li>
                     <li className="footer-list_item"><a href="#"> BECOME A MEMBER </a></li>
                     <li className="footer-list_item"><a href="#"> SEND US FEEDBACK </a></li>
                     <li className="footer-list_item"><a href="#"> GET HELP </a></li>
                 </ul>

             </div>
             <div className="footer-column_3">
                 <ul className="footer-list">
                     <li className="footer-list_item"><a href="#"> Order Status </a></li>
                     <li className="footer-list_item"><a href="#"> Shipping and Delivery  </a></li>
                     <li className="footer-list_item"><a href="#"> Returns </a></li>
                     <li className="footer-list_item"><a href="#"> Payment Options </a></li>
                     <li className="footer-list_item"><a href="#"> Gift Card Balance </a></li>
                 </ul>
             </div>
             <div className="footer-column_4">
                 <ul className="footer-list">
                     <li className="footer-list_item"><a href="#"> Contact Us </a></li>
                     <li className="footer-list_item"><a href="#"> ABOUT NIKE </a></li>
                     <li className="footer-list_item"><a href="#"> News </a></li>
                     <li className="footer-list_item"><a href="#"> Careers </a></li>
                     <li className="footer-list_item"><a href="#"> Investors </a></li>
                 </ul>
             </div>
             <div className="footer-column_5">
                 <ul className="footer-list">
                     <li className="footer-list_item"><a href="#"> Purpose </a></li>
                     <li className="footer-list_item"><a href="#"> Sustainability </a></li>
                     <li className="footer-list_item"><a href="#"> CA Supply Chains Act </a></li>
                </ul> 
             </div>
             <div className="copyright">
            <span className="copyright-nike">NIKE INC</span>
            <span className="copyright-date">2020</span>
        </div>
        </div>
       
        </>
    )
}

export default Footer
