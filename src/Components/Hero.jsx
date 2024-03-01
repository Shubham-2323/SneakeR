import React from 'react'
import { useEffect } from 'react';
import shoe from './Assests/shoe.png'
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])
    return (
        <div className='hero'>
            <div className="section1">
                <div data-aos="fade-right" className="hero-text">
                    <h1>FIND</h1>
                    <p className='hero-para'>YOUR</p>
                </div>


                <div data-aos="fade-down"  className='hero-text'>
                    <p className='hero-para2'>STYLE</p>
                    <h1 className='here'>HERE</h1>
                </div>

                <div className="paragraph">
                    <p className='p1'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed</p>
                    <p className='p2'>do eiusmod tempor incididunt ut labore et dolore magna alia.</p>
                    <p className='p3'>Ut enim ad minim veniam</p>

                </div>

                <div data-aos="fade-down"  className="buttons">
                    <button className=' btn buy'>BUY NOW</button>
                    <button className='btn explore'>EXPLORE</button>

                </div>
            </div>

            <div className="section2">
                <img className='image' src={shoe} alt="" />
            </div>

        </div>
    )
}

export default Hero
