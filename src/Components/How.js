import React from 'react'
import { useEffect } from 'react'
import './How.css'

function How() {
    useEffect(() => {
        document.title='How'
     }, [])
    return (
        <div className='how-cnt'>
            <div className='video-box'>
                <video className='vid' src='/Online-shopping-animation.mp4' autoPlay loop muted></video>
            </div>
        </div>
    )
}

export default How
