import React from 'react'
import { useEffect } from 'react'
import './ContactUs.css'

function ContactUs() {

    useEffect(() => {
        document.title='Contact Us'
    }, [])

    return (
        <div className='contact-cnt'>
            <div>
                <p className='contact-us'>Contact Us</p>
                <p className='statement'>Feel free to contact us or visit us for any query or booking for an appointment</p>
            </div>
            <div className='flex'>
                <div className='contact-items'>
                    <ul className='contact-list'>
                        <div className='contact-li'>
                            <li className='li'> Adress</li>
                            <li className='li'> XYZ ROAD KARACHI</li>
                        </div>
                        <div className='contact-li'>
                            <li className='li'> Phone/Fax</li>
                            <li className='li'> 021-0000000</li>
                        </div>
                        <div className='contact-li'>
                            <li className='li'> Email</li>
                            <li className='li'> ideal@anymail.com</li>
                        </div>
                        <div className='contact-li'>
                            <li className='li'> Toll Free Number</li>
                            <li className='li'> 0300-0000000</li>
                        </div>
                    </ul>
                </div>
                <div className='feedback-cnt'>
                    <h2 className='feedback'>Feedback</h2>
                    <div className='feedback-form'>
                        <div className='grid'>
                            <p>User Name</p>
                            <input type='text' className='common' id='user-name' ></input>
                        </div>
                        <div className='grid'>
                            <p >Email Address</p>
                            <input type='text' className='common' id='user-email' ></input>
                        </div>
                        <div className='grid'>
                            <p >Query/Feedback</p>
                            <input type='text' className='common' id='input-feedback'></input>
                        </div>
                    </div>
                    <button type='submit' className='submit-button'>Submit</button>    
                </div>
            </div>
        </div>
    )
}

export default ContactUs
    