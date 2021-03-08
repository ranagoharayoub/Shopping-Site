import React, { useEffect } from 'react'
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {

    useEffect(() => {
        document.title='Shopicide-home'
    }, [])

    return (
        <div className='home'>
            <div className='welcome'>
                <p >Welcome to Shopicide</p>
            </div>
            <div className='button'>
                <Link to='/shop' className='shoping'> DIGITAL SHOPS</Link>
                <Link to='/how' className='how'>HOW IT WORKS</Link>
            </div>
        </div>
    )
}

export default Home
