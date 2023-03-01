import React from 'react';
import './CheckOut.css'
import BreadcrumbExample from '../BreadCrumb';
import Pricing from '../Pricing';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const CheckOut = () => {
    return (
        <div className='checkout-bg'>
            <div style={{ marginBottom: '90px', }}>
                {/* <BreadcrumbExample /> */}
                <h1>Get started with an expert tutor today</h1>
                <div style={{ margin: 'auto' }}>
                    <h6 style={{ textAlign: 'center' }}>Only pay for the tutoring time you request - no extra fees or commitments!
                        Choose to pay-as-you-go, OR save money by pre-purchasing one of our tutoring plans for a full semester (16 weeks) of tutoring.
                        Select the plan that&sol;s right for you.</h6>

                </div>

            </div>
            <Pricing />
        </div>
    );
};

export default CheckOut;