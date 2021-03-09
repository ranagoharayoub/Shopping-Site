import React from 'react'
import { useEffect } from 'react'
import './Footwear.css'

function Footwear() {
    useEffect(() => {
       document.title='Footwear'
    }, [])
    return (
        <div className='footwear-container'>
            <div>
                <h1>SORRY FOR INCONVINIENCE</h1>
                <h1 >SITE IS BEING UPGRADED</h1>
            </div>

        </div>
    )
}

export default Footwear
