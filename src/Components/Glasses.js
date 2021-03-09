import React from 'react'
import { useEffect } from 'react'
import './Glasses.css'

function Glasses() {
    useEffect(() => {
        document.title='Glasses'
     }, [])
    return (
        <div className='glasses-container'>
            <h1 className='glasses'> Looking for Glasses?
                <br></br>
                 We will get that soon for you :)
            </h1>
        </div>
    )
}

export default Glasses
