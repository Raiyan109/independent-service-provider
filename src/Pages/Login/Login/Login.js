import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className='login-form'>

            <Form onSubmit={handleSubmit}>
                <h1>login </h1>
                <input ref={emailRef} type="email" placeholder='Email' name="" id="" className='box' required />
                <input ref={passwordRef} type="password" placeholder='Password' className='box' name="" id="" required />
                <p>Forget Password? </p>
                <p>Don't have an account? <Link to='/register' className='text-decoration-none' onClick={navigateRegister}>Please Signup</Link> </p>
                <input type="submit" className='btn' value="Login" />
            </Form>
        </div>
    );
};

export default Login;