import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const navigate = useNavigate()
    const navigateToCheckOut = () => {
        navigate('/checkout')
    }
    const { id, name, description, img, price } = service
    return (
        <div className='service-container'>
            <img className='w-50' src={img} alt="" />
            <h1>{name}</h1>
            <p>${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToCheckOut()}>Checkout </button>
        </div>
    );
};

export default Service;