import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { rkkAuth, setRkkAuth } = useAuth()
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()

    const navigateLogin = () => {
        navigate('/login')
    }

    // if (user) {
    //     navigate('/home')
    // }

    const handleRegister = async (event) => {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:5000/api/users/signup', {
            name,
            email,
            password,
        })
        navigate(location.state || '/login')
        setRkkAuth({
            ...rkkAuth,
            user: data.user,
            token: data.token
        })
        localStorage.setItem('userId', data._id)
        localStorage.setItem('rkkAuth', JSON.stringify(data.user))
        console.log(data);

        // createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className='form-box'>
                <div className="header-form">
                    <Form onSubmit={handleRegister}>
                        <h1>Sign up </h1>
                        <input className='box' placeholder='Your Name' name='name' type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="email" placeholder='Email' name="email" id="" className='box'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <input type="password" placeholder='Password' className='box' name="password" id=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <p>Already have an account? <Link to='/login' className='text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                        <input type="submit" className='login-btn' value="Sign up" />
                        {/* <Social></Social> */}
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default Register;