import React, { Component } from 'react'
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
        console.log(e.target.name)
        const { name, value } = e.target;

        this.setState({ [name]: value }, ()=> {
            console.log(this.state)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
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
                    <CustomButton type='submit'>LOGIN</CustomButton>
                </form>
            </div>
        )
    }
}
