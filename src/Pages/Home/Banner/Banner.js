import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../Images/banner/quran.jpg'
import banner2 from '../../../Images/banner/aqeedah.jpg'
import banner3 from '../../../Images/banner/arabic (2).jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-heading'>QURAN</h3>
                    <p>At My RKK TUITION, students are taught the recitation of the Quraan with proper Tajweed rules step by step following the Saudi-Arabian Accent. Reciting Quran with tajweed gives 10 rewards for each letter recited. The reciter will be from the best of the people.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-heading'>AQEEDAH</h3>
                    <p>Illuminating the basic belief in Allah, His beautiful 99 names, discussing the matters which are known from the Quran and sound ahadeeth. On the whole, making clear what a Muslim must believe in his heart, by accepting the truth of Allah and His Messenger.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption >
                    <h3 className='banner-heading'>ARABIC</h3>
                    <p>Learning Arabic can be a long and rigorous road. We as Muslim ummah are commanded to understand and reflect upon the Holy Quran. To do so, students at RKK TUITION are taught Arabic language at different levels depending on the age and their ability to learn.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;