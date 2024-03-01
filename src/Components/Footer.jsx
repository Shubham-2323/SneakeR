import React from 'react'
import './Footer.css'
import logo from './Assests/logo.png'
import insta from './Assests/insta.png'
import fb from './Assests/fb.png'
import twitter from './Assests/twitter.png'
import yt from './Assests/yt.png'

const Footer = () => {
    return (<>
    
        <div className='footer'>
            <div className="footer-sec-1">
                <div className="f-image">
                    <img className='footer-image            ' src={logo} alt="" />
                </div>
                <div className="sec-1-details">
                    <h1 className='sec-header'>Contact</h1>
                    <div className="para-sec">
                        <p className='para-tag'>Address: <span className='span-tag'>#1281 Sector-11, Kharar</span></p>
                        <p className='para-tag'>Phone: <span className='span-tag'>9876823939</span> </p>
                        <p className='para-tag'>Visiting Hours :<span className='span-tag'>10am to 8pm </span></p>

                    </div>

                </div>
            </div>
            <div className="footer-sec">
                <div className="about">
                    <h1 className="about-tag">
                        About
                    </h1>
                    <div className="para-details-sec">
                        <p className="details-abouts">
                            About Us
                        </p>
                        <p className="details-abouts">
                            Privacy
                        </p>
                        <p className="details-abouts">
                            Delivery
                        </p>
                        <p className="details-abouts">
                            Terms & Conditions
                        </p>
                        <p className="details-abouts">
                          Contact Us
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-sec2">
                <div className="about">
                    <h1 className="about-tag">
                        Account
                    </h1>
                    <div className="para-details-sec">
                        <p className="details-abouts">
                            Sign In
                        </p>
                        <p className="details-abouts">
                           View cart
                        </p>
                        <p className="details-abouts">
                            My Wishlist
                        </p>
                        <p className="details-abouts">
                            Track order
                        </p>
                        <p className="details-abouts">
                            help
                        </p>
                    </div>

                </div>
            </div>
            <div className="footer-sec">
                <div className="about">
                    <h1 className="about-tag">
                        Follow Us
                    </h1>    
                </div>
                <div className="f-icons">
                    <img className='icons-footer' src={insta} alt="" />
                    <img className='icons-footer' src={fb} alt="" />
                    <img className='icons-footer' src={twitter} alt="" />
                    <img  className='icons-footer'src={yt} alt="" />
                </div>
            </div>
        </div>
        <div className='copyright'><hr />
        <div className="copy">
        © 2024 ~ Shubham All rights Reserved        </div>
        </div>
        </>
    )
}

export default Footer
