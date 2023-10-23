import React from 'react';
import './FindOutMore.css'
import aboutImg from '../../../Images/madrasa-student-reading-removebg-preview.png'
import BenifitsOfUnlimited from '../../BenifitsOfUnlimited/BenifitsOfUnlimited';
import { Link } from 'react-router-dom';

const FindOutMore = () => {
    return (
        <div>
            <div className="container" style={{ padding: '50px', fontFamily: "'Merriweather', serif", marginTop: '80px', lineHeight: '28px', marginBottom: '100px' }}
                id='#about'
            >
                <div className="row">
                    <div className="col-md-6">
                        <h5
                            style={{ marginBottom: '19px' }} data-aos="fade-down"
                            data-aos-delay='400'
                        >Unlimited subscription</h5>
                        <h2
                            style={{ marginBottom: '19px' }} data-aos="fade-down"
                            data-aos-delay='400'
                        >Get 30% off Unlimited learning. Knowledge Wins.</h2>
                        <p
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >Invest in your future with Unlimited access to 1000+ online courses from top universities. Where will your knowledge take you?</p>
                        <h4 style={{ marginBottom: '19px' }}
                            data-aos="fade-down"
                            data-aos-delay='500'
                        ><del>$349.99</del> <ins className='text-danger'>$244.99</ins></h4>

                        <button
                            style={{ backgroundColor: '#333', color: '#ffff', padding: '10px', border: 'none', borderRadius: '3px' }}
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >
                            <Link className='text-decoration-none text-white' to='/register'>Subscribe to Unlimited</Link>
                        </button>
                        <p style={{ marginTop: '20px' }}><small
                            data-aos="fade-down"
                            data-aos-delay='600'
                        >Automatically renews. Cancel anytime. View <span><a href="">T&Cs</a></span> here.</small></p>
                    </div>
                    <div className="col-md-6">
                        <img src={aboutImg} alt="about" className="img-fluid" data-aos="fade-down"
                            data-aos-delay='500' />
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="container" style={{ padding: '50px', fontFamily: "'Merriweather', serif", marginTop: '80px', lineHeight: '28px', marginBottom: '100px' }}
                id='#about'
            >
                <BenifitsOfUnlimited />
            </div>
        </div>
    );
};

export default FindOutMore;