import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container mb-5'>
            <div className="row">
                <h1 className='text-center mb-5 mt-5 font'>What my students says about me. </h1>
                <div className="reviews-container">
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;