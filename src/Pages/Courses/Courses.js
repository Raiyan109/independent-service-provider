import React, { useEffect, useState } from 'react';
import './Courses.css'
import img1 from '../../Images/hifjstudy.png'
import img2 from '../../Images/najera.jpg'
import img3 from '../../Images/quranStudy.jpg'
import { AiOutlineClockCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([])

    const getCourses = async () => {
        const { data } = await axios.get('http://localhost:5000/api/courses')

        setCourses(data)
    }

    useEffect(() => {
        getCourses()
    }, [])
    return (
        <div className='courses-container'>
            <div className="courses">
                {/* <div className="courses-upside">
                    <div className="in-progress">
                        <AiOutlineClockCircle />
                        <div className='d-flex flex-column'>
                            <p>In Progress</p>
                            <p>3 Courses</p>
                        </div>
                    </div>
                    <div className="completed">
                        <AiOutlineCheckCircle />
                        <div className='d-flex flex-column'>
                            <p>Completed</p>
                            <p>4 Courses</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="courses-card-container">
                    <div className="courses-card">
                        <div className="courses-img"></div>
                        <div className="courses-intro"></div>
                        <div className="courses-chapters"></div>
                        <div className="courses-progress"></div>
                    </div>
                </div> */}

                <div className='d-flex justify-content-center align-items-center '>
                    <div class="container mx-auto py-5 px-5 gx-5">
                        <div class="row gy-3 gx-5 gx-md-0">
                            {courses.map((course) => (
                                <div key={course?._id} class="col-lg-3 col-md-6 col-sm-12 card-container">
                                    <div className='p-3 mb-2'>
                                        {/* <h3 class="card-title">Beginner Friendly</h3> */}
                                        <div class="relative">
                                            <img class="card-image" src={course?.img} alt="Colors" />
                                            <p class="card-badge">{course?.isFree === true ? 'Free' : course?.price + ' ' + '৳'}</p>
                                        </div>
                                        <Link className='text-decoration-none' to={`/course/${course?._id}`}>
                                            <h1 class="card-course-name">{course?.name}
                                            </h1>
                                        </Link>
                                        <h5 className='card-course-category text-capitalize'>{course?.category?.name}</h5>
                                        <div class="card-info">
                                            <div class="card-info-item">
                                                <span>
                                                    <AiOutlineClockCircle class="card-icon" />
                                                </span>
                                                <p>{course?.length} Minutes</p>
                                            </div>
                                            {/* <!-- Repeat the card-info-item for other sections --> */}
                                        </div>
                                        <div class="card-info1">
                                            <div class="card-info-item">
                                                <span>
                                                    <BsBook class="card-icon" />
                                                </span>
                                                <p>{course?.chapters} {course?.chapters === 1 ? 'Chapter' : 'Chapters'}</p>
                                            </div>
                                            {/* <!-- Repeat the card-info-item for other sections --> */}
                                        </div>

                                        <Link to={`/course/${course?._id}`}><button class="card-button">Buy Lesson</button></Link>
                                    </div>
                                </div>
                            ))}

                        </div>
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