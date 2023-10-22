import React from 'react';
import './CheckOut.css'
import BreadcrumbExample from '../BreadCrumb';
import Pricing from '../Pricing';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';

// const stripePromise = loadStripe('pk_test_51L1OriC6jSgZhdi8qkAiIGespYE6i96T7HuAWIKypgpRFOCfOhhRlqNPTLmInenVmKn5srcAjElwfRYf0oUEUT5E00NRA1jfwh');
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);
const CheckOut = () => {
    return (
        <div className='checkout-bg'>
            {/* <div style={{ marginBottom: '90px', }}>
                <h1>Get started with an expert tutor today</h1>
                <div style={{ margin: 'auto' }}>
                    <h6 style={{ textAlign: 'center' }}>Only pay for the tutoring time you request - no extra fees or commitments!
                        Choose to pay-as-you-go, OR save money by pre-purchasing one of our tutoring plans for a full semester (16 weeks) of tutoring.
                        Select the plan that&sol;s right for you.</h6>

                </div>

            </div> */}
            {/* <Pricing /> */}
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: 'rgba( 202, 82, 82, 0.3 )', boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter: 'blur( 8px )', borderRadius: '10px', border: '1px solid rgba( 255, 255, 255, 0.18 )', width: '500px', height: '200px', marginBottom: '20px' }}>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div> */}
        </div>
    );
};

export default CheckOut;