import React from 'react';
import teacherReviewImg from '../Images/Our.png'
const TeachWithRkk = () => {
    return (
        <>
            <div className="container" style={{ padding: '50px', height: '600px', fontFamily: "'Merriweather', serif", marginTop: '80px', lineHeight: '28px', marginBottom: '100px' }}>
                <div className="row">

                    <div className="col-md-6">
                        <img src={teacherReviewImg} alt="about" className="img-fluid" data-aos="fade-down"
                            data-aos-delay='500' />
                    </div>
                    <div className="col-md-6">
                        <h2
                            style={{ marginBottom: '19px' }} data-aos="fade-down"
                            data-aos-delay='400'
                        >Focus on what you do best - teach. Leave the rest to us.</h2>

                        <p
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >With our user-freindly and secured teaching tools, the RKK team is dedicated to help you onboard a seamless online teaching experience.</p>
                        <button
                            style={{ backgroundColor: '#333', color: '#ffff', padding: '10px', border: 'none', borderRadius: '3px' }}
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >Teach with RKK Tuition</button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default TeachWithRkk;