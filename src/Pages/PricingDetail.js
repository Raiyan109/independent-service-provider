import React from 'react';

const PricingDetail = ({ price }) => {
    return (
        <div className="" style={{ background: 'rgba( 202, 82, 82, 0.3 )', boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter: 'blur( 8px )', webkitBackdropFilter: 'blur( 8px )', borderRadius: '10px', border: '1px solid rgba( 255, 255, 255, 0.18 )', cursor: 'pointer', }}>
            <div className="card-body">
                <div className="plan-name">
                    {price.name} </div>
                <div className="plan-description">
                    <div className="plan-price month">
                        ${price.price}<sub> / month</sub></div>
                    <p>{price.description}</p>
                </div>
                <div className="plan-cta">
                    <p><a style={{ textDecoration: 'none', color: '#fff', background: 'rgba( 255,101,48,0.59)', padding: '10px', borderRadius: '6px' }} href="#" data-open="get-pro-modal" aria-controls="get-pro-modal" aria-haspopup="true" tabindex="0">Get Started</a></p>
                </div>
            </div>
        </div>

    );
};

export default PricingDetail;