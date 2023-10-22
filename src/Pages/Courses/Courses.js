import React from 'react';
import './Courses.css'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import img1 from '../../Images/hifjstudy.png'
import img2 from '../../Images/najera.jpg'
import img3 from '../../Images/quranStudy.jpg'

const Courses = () => {
    return (
        <div className='min-vh-100'>
            <Carousel fade>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={img1} width={500} height={500} text="First slide" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column fw-bold'>
                        <h1 className='display-1 mb-5'>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={img2} text="Second slide" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column fw-bold'>
                        <h1 className='display-1 mb-5'>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={img3} width={500} height={500} text="Third slide" />
                    <Carousel.Caption className='d-flex justify-content-center align-items-center flex-column fw-bold'>
                        <h1 className='display-1 mb-5'>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Courses;