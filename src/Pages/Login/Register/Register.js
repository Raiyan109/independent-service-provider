import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('')
    const [secretKey, setSecretKey] = useState('')
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
        if (userType === 'Admin' && secretKey !== 'RKKTUITION') {
            toast.error('Invalid Key')
        }
        else {
            const { data } = await axios.post('http://localhost:5000/api/users/signup', {
                name,
                email,
                password,
                userType
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
        }


        // createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className='form-box'>
                <div className="header-form">
                    <Form onSubmit={handleRegister}>
                        <h1>Sign up </h1>

                        {/* Radio Buttons */}
                        <div>
                            Register As :
                            <div className='' style={{ marginTop: '5px', marginBottom: '5px' }}>
                                <div >
                                    <input type="radio"
                                        name='UserType'
                                        value='User'
                                        onChange={(e) => setUserType(e.target.value)}
                                    />
                                    User
                                </div>
                                <div>
                                    <input type="radio"
                                        name='UserType'
                                        value='Admin'
                                        onChange={(e) => setUserType(e.target.value)}
                                    />
                                    Admin
                                </div>
                            </div>

                            {/* Secret Key */}
                            {userType === 'Admin' ? (
                                <div>
                                    <label>Secret Key</label>
                                    <input
                                        className='box'
                                        type="text"
                                        placeholder='Secret Key'
                                        value={secretKey}
                                        onChange={(e) => setSecretKey(e.target.value)}
                                    />
                                </div>
                            ) : null}
                        </div>

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