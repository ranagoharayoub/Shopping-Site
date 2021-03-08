import React, { useEffect } from 'react'
import './Clothes.css'
function Clothes() {

    useEffect(() => {
        document.title='Clothing Store'
    }, [])

    return (
        <div className='cloth-container'>
            <h1 className='store'>OOPS!
            Store is Under Construction</h1>
        </div>
    )
}

export default Clothes
