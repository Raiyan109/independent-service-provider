import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='signup-form'>
            <Form onSubmit={handleRegister}>
                <h1>Sign up </h1>
                <input placeholder='Your Name' name='name' type="text" />
                <input type="email" placeholder='Email' name="email" id="" className='box' required />
                <input type="password" placeholder='Password' className='box' name="password" id="" required />
                <p>Forget Password? </p>
                <p>Already have an account? <Link to='/login' className='text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <input type="submit" className='btn' value="Sign up" />
            </Form>
        </div>
    );
};

export default Register;