import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import '@material-ui/icons'
import { Menu } from '@material-ui/icons';


function Navbar({click, closeClick}) {

    return (
        <nav className='nav-container'>
            <div className='logo-side'>
                    <Link to='/' onClick={closeClick}>
                        <img src='/carts.png' alt='logo' className='logo'></img>
                    </Link>    
                    <Link to='/'  id='title' onClick={closeClick}>     
                        Shopicide
                    </Link>
            </div>
            <div className='menu-items'>
                <div className='nav'>
                    <ul className='nav-items'>
                        <Link to='/about' id="list">
                            <li className='list'>About</li>
                        </Link>
                        <Link to='/login' id="list">
                            <li className='list'>LogIn</li>
                        </Link>
                        <Link to='/signup' id="list">
                            <li className='list'>SignUp</li>
                        </Link>
                    </ul>
                </div>
                <div className='menu-btn'>
                    <button onClick={click} className='click-btn'>
                        <Menu style={{ fontSize: 30 }} ></Menu>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
