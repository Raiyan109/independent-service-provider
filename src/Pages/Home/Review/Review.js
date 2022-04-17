import React from 'react';
import './Review.css'
const Review = ({ review }) => {
    const { name, description } = review
    return (
        <div className='review-container'>
            <p className='description'>{description}</p>
            <p className='name'><small>{name}</small></p>
        </div>
    );
};

export default Review;