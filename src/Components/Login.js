import React from 'react'
import './login.css'

function Login() {
    return (
        <div className='login-cnt'>
            <div className='login-form'>
                <div className='center-content'>
                    <label for='email'>Email</label>
                    <input type='text' id='email' ></input>
                    <label for='password'>Password</label>
                    <input type='password' id='password'></input>
                    <button className='login-button'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login
