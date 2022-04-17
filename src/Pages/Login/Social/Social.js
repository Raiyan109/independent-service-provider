import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../Images/google.svg'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='input-wrapper'>
                <button onClick={() => signInWithGoogle()} className='google-auth btn btn-info w-50 d-block mx-auto' >
                    <img src={googleLogo} alt='' />
                    <p className='px-2'> Continue with Google </p>
                </button>
            </div>
        </div>
    );
};

export default Social;