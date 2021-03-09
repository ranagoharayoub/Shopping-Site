import React, { useEffect } from 'react'
import './About.css'

function About() {

    useEffect(() => {
        document.title='About'
    }, [])

    return (
        <div className='about-cont'>
            <div className='about'>
                <h1 >Know About Us</h1>
                <h2 className='intro'> We are digital conglomerate group holding trust of million happy customers</h2>
            </div>
        </div>
    )
}

export default About
