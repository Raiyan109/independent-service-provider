import React from 'react';
import aboutImg from '../Images/rkk-about.jpg'
const AboutHero = () => {
    return (
        <>
            <div className="container" style={{ padding: '50px', height: '600px', fontFamily: "'Merriweather', serif", marginTop: '80px', lineHeight: '28px', marginBottom: '100px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <h2
                            style={{ marginBottom: '19px' }} data-aos="fade-down"
                            data-aos-delay='400'
                        >Learn from the Best</h2>
                        <h4 style={{ marginBottom: '19px' }}
                            data-aos="fade-down"
                            data-aos-delay='500'
                        >Our expert tutors bring learning to life.</h4>
                        <p
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >At our independent online tutoring service, we strive to create a safe, supportive, and engaging learning environment for our students. Whether you need help with a specific subject or want to improve your overall academic performance, our tutors are here to guide you every step of the way.</p>
                        <button
                            style={{ backgroundColor: '#333', color: '#ffff', padding: '10px', border: 'none', borderRadius: '3px' }}
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >Start your journey today</button>
                    </div>
                    <div className="col-md-6">
                        <img src={aboutImg} alt="about" className="img-fluid" data-aos="fade-down"
                            data-aos-delay='500' />
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutHero;