import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from './Assests/logo.png'
import cart from './Assests/cart.png'
import search from './Assests/search.png'
import user from './Assests/user.png'
import notification from './Assests/notification.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import drop from './Assests/drop.png'

const Navbar = () => {

    const [click, setclick] = useState('Home')
    const menuRef = useRef()

    const drop_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img  className='shoe-logo' src={logo} alt="shoes" />
            </div>
            <img className='d-img'onClick={drop_toggle} src={drop} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setclick('Home') }}>Home {click === 'Home' ? <hr /> : <></>}</li>
                <li onClick={() => { setclick('About') }}>About{click === 'About' ? <hr /> : <></>}</li>
                <li onClick={() => { setclick('Products') }}>Products {click === 'Products' ? <hr /> : <></>}</li>
                <li onClick={() => { setclick('Services') }}>Services {click === 'Services' ? <hr /> : <></>}</li>

            </ul>
            <div className="nav-icons">
                <img className='icon' src={search} alt="search" />
                <img className='icon' src={user} alt="user" />
                <img className='icon' src={cart} alt="cart" />
                <img className='icon' src={notification} alt="cart" />
            </div>

        </div>
    )
}

export default Navbar
