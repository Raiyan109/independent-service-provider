import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, description, img, price } = service
    return (
        <div>
            <img className='w-50' src={img} alt="" />
            <h1>{name}</h1>
            <p>${price}</p>
            <p><small>{description}</small></p>
            <button>Checkout </button>
        </div>
    );
};

export default Service;