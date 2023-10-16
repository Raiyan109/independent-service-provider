import React from 'react';
import AboutHero from '../../AboutHero';
import TeachWithRkk from '../../TeachWithRkk';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'
import Faq from '../../Faq/Faq';
import CTA from '../../CTA/CTA';
import Teachers from '../Teachers/Teachers';
import GetInTouch from '../GetInTouch/GetInTouch';
import Hero2 from '../Hero2/Hero2';
import Hero3 from '../Hero3/Hero3';
import HowToApply from '../HowToApply/HowToApply';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutHero />
            <Services></Services>
            <TeachWithRkk />
            <Teachers />
            <Hero2 />
            <Hero3 />
            {/* <HowToApply /> */}
            <Reviews></Reviews>
            <CTA />
            <Faq />
            <GetInTouch />
        </div>
    );
};

export default Home;