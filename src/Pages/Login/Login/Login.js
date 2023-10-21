import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import Social from '../Social/Social';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { rkkAuth, setRkkAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);

    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // if (user) {
    //     navigate(from, { replace: true });
    // }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:5000/api/users/login', {
            email,
            password,
        })
        navigate(location.state || '/')
        setRkkAuth({
            ...rkkAuth,
            user: data.user,
            token: data.token
        })
        localStorage.setItem('userId', data._id)
        localStorage.setItem('rkkAuth', JSON.stringify(data))
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    // const resetPassword = async () => {
    //     const email = emailRef.current.value
    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast('Sent email');
    //     }
    //     else {
    //         toast('Please enter your email address')
    //     }
    // }
    return (
        <div className='login-container'>
            <div className='form-box'>
                <div className="header-form">
                    <Form onSubmit={handleSubmit}>
                        <h1>Login</h1>

                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' name="" id="" className='box' required />
                        <input value={password}
                            onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='box' name="" id="" required />
                        {/* <p>Forget Password? <button className='btn btn-link' onClick={resetPassword}>Reset Password </button> </p> */}
                        <p>Don't have an account? <Link to='/register' className='text-decoration-none' onClick={navigateRegister}>Please Signup</Link> </p>
                        <input type="submit" className='login-btn' value="Login" />
                        {/* <Social></Social> */}
                        <ToastContainer />
                    </Form>

                </div>

            </div>
        </div>
    );
};

export default Login;