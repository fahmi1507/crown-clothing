import React from 'react'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import './LoginAndRegister.styles.scss'


const LoginAndRegister = () => {
    return (
        <div className='login-register'>
            <Login/>
            <Register/>
        </div>
    )
}

export default LoginAndRegister
