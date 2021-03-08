import React from 'react'
import "./Shop.css"
import {Link} from 'react-router-dom'

function Shop({width}) {
    console.log(width)
    return (
        <div className='universal'>
            { width < 1120 ?
                <div className='store-pic'>
                <img src='/digitalshop_edited.jpg' width={width} alt='pic'></img>
            </div>:
            null
            }
        <div className='digitalshop'>
            <div className='products'>
                <Link to='/clothes'>
                    <img id='prod' className='clothes' src='/clothescard.jpg' alt='cloth' />
                    <p className='prod-name'>CLOTHING STORE</p>
                </Link>
                <Link to='/footwear'>
                    <img id='prod' className='footwear' src='/footwear4.jpg' alt='footwear' />
                    <p className='prod-name'>FOOTWEAR</p>
                </Link>
            </div>
            <div className='products-2'>
                <Link to='/watches'>
                <img id='prod' className='watch' src='/watch.jpg' alt='watch' />
                <p className='prod-name'>WATCH HOUSE</p>
                </Link>
                <Link to='/glasses'>
                <img id='prod' className='glasses' src='/glasses.jpg' alt='glasses' />
                <p className='prod-name'>50 SHADES</p>
                </Link>
            </div>

        </div>
        </div>
    )
}

export default Shop
