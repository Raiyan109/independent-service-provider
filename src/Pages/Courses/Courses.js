import React from 'react';
import './Courses.css'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import img1 from '../../Images/hifjstudy.png'
import img2 from '../../Images/najera.jpg'
import img3 from '../../Images/quranStudy.jpg'

const Courses = () => {
    return (
        <div className='courses-container'>
            <div className="courses">
                <div className="courses-upside">
                    <div className="in-progress"></div>
                    <div className="completed"></div>
                </div>

                <div className="courses-card-container">
                    <div className="courses-card">
                        <div className="courses-img"></div>
                        <div className="courses-intro"></div>
                        <div className="courses-chapters"></div>
                        <div className="courses-progress"></div>
                    </div>
                </div>
            </div>
            {/* <Carousel fade>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={img1} width={500} height={500} text="First slide" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column fw-bold'>
                        <h1 className='display-1 mb-5'>Najera</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={img2} text="Second slide" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column fw-bold'>
                        <h1 className='display-1 mb-5'>Hifzul Quran</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={img3} width={500} height={500} text="Third slide" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column fw-bold'>
                        <h1 className='display-1 mb-5'>Arabic Language</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default Courses;