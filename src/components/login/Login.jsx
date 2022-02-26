import React, { Component } from 'react'
import { useState } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './login.styles.scss'

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }
    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' })

        } catch (e) {
            console.log(e, 'failed login');
        }

    }

    
    return (
        <div className='login'>
            <h2>I already have an account</h2>
            <span>Login with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                type="email" 
                required 
                value={email}
                handleChange={handleChange}
                name='email'
                label='Email'
                />
                <FormInput 
                type="password" 
                required 
                value={password}
                handleChange={handleChange}
                name='password'
                label='Password'
                />
                <div className="buttons">
                    <CustomButton type='submit'>LOGIN</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>LOGIN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )
    
}

export default Login;
