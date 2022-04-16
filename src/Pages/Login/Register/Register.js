import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {

        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
    }
    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault()
        console.log(event.target)
    }
    return (
        <div className='signup-form'>
            <Form onSubmit={handleRegister}>
                <h1>Sign up </h1>
                <input placeholder='Your Name' type="text" />
                <input ref={emailRef} type="email" placeholder='Email' name="" id="" className='box' required />
                <input ref={passwordRef} type="password" placeholder='Password' className='box' name="" id="" required />
                <p>Forget Password? </p>
                <p>Already have an account? <Link to='/login' className='text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <input type="submit" className='btn' value="Sign up" />
            </Form>
        </div>
    );
};

export default Register;