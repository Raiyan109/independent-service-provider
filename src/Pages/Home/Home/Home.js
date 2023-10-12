import React from 'react';
import AboutHero from '../../AboutHero';
import TeachWithRkk from '../../TeachWithRkk';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'
import Faq from '../../Faq/Faq';
import CTA from '../../CTA/CTA';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutHero />
            <Services></Services>
            <TeachWithRkk />
            <Reviews></Reviews>
            <Faq />
            <CTA />
        </div>
    );
};

export default Home;