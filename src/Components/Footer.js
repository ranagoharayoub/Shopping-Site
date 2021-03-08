import React from 'react'
import './Footer.css'
import{Link} from 'react-router-dom'
function Footer({click}) {
    return (
        <div className='footer-container'>
            <Link to='/' id='name'>
                Shopicide
            </Link>
            <h3 className='imp-links'>IMPORTANT LINKS</h3>
            <div className='link-tree'>
                <ul className='ul' >
                    <li className='li-list'>Businesses</li>                    
                    <li className='li-list'>Products</li>
                </ul>
                <ul className='ul' >
                    <li className='li-list'>Services</li>
                    <li className='li-list'>Offices</li>
                    
                </ul>
                <ul className='ul'>
                    <Link to='/about' className='link' onClick={click}>
                        <li className='li-list'>About Us</li>
                    </Link>
                    <Link to='/contactus' className='link' onClick={click}>
                        <li className='li-list'>Contacts</li>
                    </Link>
                   
                </ul>
            </div>
            <div className='cc'>
                <p className='by'>DESIGNED BY GOHAR INC</p>
                <p className='copyrights'>COPYRIGHTS PROTECTED © 2020</p>
                <time dateTime='2020-12-01'>DATE: 01-12-2020</time>

            </div>
        </div>
    )
}

export default Footer
