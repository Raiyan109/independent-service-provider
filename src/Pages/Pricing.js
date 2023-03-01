import React, { useEffect, useState } from 'react';
import PricingDetail from './PricingDetail';

const Pricing = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        const url = 'pricing.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '30px' }}>
                    {
                        prices.map((price) => (
                            <PricingDetail
                                key={price.id}
                                price={price}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Pricing;