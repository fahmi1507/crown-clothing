import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './login.styles.scss'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({ email: '', password: '' })

        } catch (e) {
            console.log(e, 'failed login');
        }

    }

    render() {
        return (
            <div className='login'>
                <h2>I already have an account</h2>
                <span>Login with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    required 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    name='email'
                    label='Email'
                    />
                    <FormInput 
                    type="password" 
                    required 
                    value={this.state.password}
                    handleChange={this.handleChange}
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
}
