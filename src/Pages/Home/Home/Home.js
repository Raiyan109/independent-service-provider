import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <h1 className='main-heading'>RKK TUTION </h1>
            <p className='heading-p'>RKK TUTION is your direct route to learning the Quran quickly and safely from the comfort of your own screen – wherever that may be. Membership includes instant access to over 500 tutorial videos .</p>
            <Services></Services>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;