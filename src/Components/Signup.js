import React from 'react'
import { useEffect } from 'react'
import './Signup.css'
function Signup() {
    useEffect(() => {
        document.title='Signup'
     }, [])
    return (
        <div className='signup-cnt'>
            <div className='signup-box'>
                <div className='placing'>
                    <div className='info-placing'>
                        <div className='user-info'>
                            <label className='info-label'>User Name</label>
                            <input type='text' className='inputs'></input>
                            <label className='info-label'>Email</label>
                            <input type='text' className='inputs'></input>
                        </div>
                        <div className='credential'>
                            <label className='info-label'>Password</label>
                            <input type='password' className='inputs'></input>
                            <label className='info-label'>Confirm Password</label>
                            <input type='password' className='inputs'></input>
                        </div>
                    </div>
                    <div className='btn'>
                    <button className='signup-button'>Sign Up</button>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Signup
