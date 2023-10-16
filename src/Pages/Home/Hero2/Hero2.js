import React from 'react';
import './Hero2.css'
import bg1 from '../../../Images/taqi usmani.jpg'
import bg2 from '../../../Images/taqi2.jpg'

const Hero2 = () => {
    return (
        <div className='hero2-container'>
            <h1 className='text-center'>Our New Course Just released! Enroll now!</h1>
            <div className="content-block hero with-overflow tri-split">
                <div className="content-wrapper">
                    <a href="#" className="header-img soft-fade ready"
                        style={{ backgroundImage: `url(${bg1})` }}
                    >
                        <div className="story-headline">
                            <h3>Introduction with Mufti Taqi Usmani is now streaming</h3>
                        </div>
                    </a>
                    <a href="https://media.netflix.com/en/only-on-netflix/81188" className="header-img soft-fade ready" style={{ backgroundImage: `url(${bg2})` }}>
                        <div className="story-headline">
                            <h3>One Day at a Time premieres on Nov 26th</h3>
                        </div>
                    </a>
                    <a href="https://media.netflix.com/en/only-on-netflix/183986" className="header-img soft-fade ready" style={{ backgroundImage: `url(${bg1})` }}>
                        <div className="story-headline">
                            <h3>Altered Classes premieres on Dec 2nd</h3>
                        </div>
                    </a>
                    <div className="shadow"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;