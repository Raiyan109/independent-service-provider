import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <h1 className='text-primary'>RKK TUTION </h1>
            <Banner></Banner>
            <Services></Services>

        </div>
    );
};

export default Home;