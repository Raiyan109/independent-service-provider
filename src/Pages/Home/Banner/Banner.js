import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../Images/banner/quran.jpg'
import banner2 from '../../../Images/banner/aqeedah.jpg'
import banner3 from '../../../Images/banner/arabic (2).jpg'

const Banner = () => {
    return (
        <Carousel id='#home'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-heading1'>GET STARTED TODAY</h3>
                    <p className='banner-heading'>Quran, Aqeedah & Arabic Tution</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-heading1'>Learn Quran Online</h3>
                    <p className='banner-heading'>Anytime & Anywhere</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption >
                    <h3 className='banner-heading1'>Admission</h3>
                    <p className='banner-heading'>2022-2023 SCHOOL YEAR</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;