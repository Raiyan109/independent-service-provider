import React from 'react';
import './UpperNav.css'
import { Link } from 'react-router-dom';

const UpperNav = () => {
    return (
        <div className='uppernav-container'>
            <div className='uppernav'>
                <h1 className="uppernav-text">Hurry, only 9 days left to get one year of Unlimited learning for $349.99 $244.99. New subscribers only. T&Cs apply</h1>
                <button><Link to='findMore'>Find out more</Link></button>
            </div>

        </div>
    );
};

export default UpperNav;