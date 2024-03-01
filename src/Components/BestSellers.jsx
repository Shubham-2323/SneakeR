import React from 'react'
import tommy from './Assests/tommy.png'
import calvin from './Assests/calvin.png'
import './BestSellers.css'
import { useEffect } from 'react'


const BestSellers = () => {
  
    return (
        <div className='view-port'>
            <h1  className='h'>
                BEST SELLERS
            </h1>
            <div className='box'>

                <div className='BS1'>
                    <div data-aos="zoom-in-up" className="image-1">
                    <img className='tommy'src={tommy} alt="" />
                    </div>
                    <div className='box-text'>
                        <h2 className='bt-1'>TOMMY HILFIGER</h2>
                    </div>
                </div>

                <div className='BS2'>
                    <div data-aos="zoom-in-up" className="image-2">
                    <img className='calvin' src={calvin} alt="" />
                    </div>
                    <div className='box-text'>
                        <h2 className='bt-2'>CALVIN KLEIN</h2>
                    </div>
                </div>

               
            </div>

            
        </div>
    )
}

export default BestSellers
