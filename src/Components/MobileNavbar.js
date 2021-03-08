import React from 'react'
import { Link } from 'react-router-dom'
import './MobNavbar.css'

function MobileNavbar({click}) {
    return (
        <div>
            <div className='mobile-nav'>
                    <ul className='mobilenav-items'>
                        <Link to='/about' id="mob-list">
                            <li onClick={click} className='list'>About</li>
                        </Link>
                        <Link to='/login' id="mob-list">
                            <li onClick={click} className='list'>LogIn</li>
                        </Link>
                        <Link to='/signup' id="mob-list">
                            <li onClick={click} className='list'>SignUp</li>
                        </Link>
                    </ul>
                </div>
        </div>
    )
}

export default MobileNavbar

