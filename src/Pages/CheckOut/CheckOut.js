import React from 'react';
import './CheckOut.css'
import BreadcrumbExample from '../BreadCrumb';
const CheckOut = () => {
    return (
        <div className='checkout-bg'>
            <BreadcrumbExample />
            <h1>Get started with an expert tutor today</h1>
            <h5>Only pay for the tutoring time you request - no extra fees or commitments!
                Choose to pay-as-you-go, OR save money by pre-purchasing one of our tutoring plans for a full semester (16 weeks) of tutoring.
                Select the plan that’s right for you.</h5>
        </div>
    );
};

export default CheckOut;