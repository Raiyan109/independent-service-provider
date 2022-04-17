import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        // navigate('/home')
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
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