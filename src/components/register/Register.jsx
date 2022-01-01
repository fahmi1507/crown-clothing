import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { Component } from 'react'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './register.styles.scss'

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, confirmPassword, displayName } = this.state;

        if (password !== confirmPassword) {
            alert('password dont match')
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            createUserProfileDoc(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });


        } catch (e) {
            console.log(e, '<<ERROR')
        }
    } 

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    } 

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Register with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    required
                    label='Display Name'
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    required
                    label='Email'
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    required
                    label='Password'
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    required
                    label='Confirm Password'
                    />
                    <CustomButton type='submit'>REGISTER</CustomButton>
                </form>
            </div>
        )
    }
}
