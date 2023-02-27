import React from 'react';
import AboutHero from '../../AboutHero';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutHero />
            <Services></Services>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;