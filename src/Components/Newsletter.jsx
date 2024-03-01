import React from 'react'
import './Newsletter.css'
import mail from './Assests/mail.png'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='details-d'>
                <div className="icon">
                    <img className='icon-mail' src={mail} alt="" />
                </div>
                <p className='Signup'>Sign Up for Newsletter</p>
                <span className='block'>and get flat 20% Discount</span>

            </div>
            <div className="input-f">
                <input className='input-d'type="text" placeholder='Your email address' />
                <div className="button-f">
                    <button className='detail-button'>Sign Up</button>
                </div>
            </div>
            
        </div>
    )
}

export default Newsletter
