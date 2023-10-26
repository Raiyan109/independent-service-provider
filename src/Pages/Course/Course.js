import React, { useEffect, useState } from 'react';
import './Course.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

const Course = () => {
    const { id } = useParams()
    const [course, setCourse] = useState([])

    const getCourse = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/courses/${id}`)
        setCourse(data)
    }
    console.log(course.name);
    useEffect(() => {
        getCourse()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <div className="container" style={{ padding: '50px', height: '600px', fontFamily: "'Merriweather', serif", marginTop: '80px', lineHeight: '28px', marginBottom: '100px' }}
                id='#about'
            >
                <div className="row">
                    <div className="col-md-6">
                        <ListGroup>
                            <ListGroup.Item>Introduction</ListGroup.Item>
                            <ListGroup.Item>Deep Dive</ListGroup.Item>
                            <ListGroup.Item>Exploring the Basices</ListGroup.Item>
                            <ListGroup.Item>Intermediate Scope</ListGroup.Item>
                            <ListGroup.Item>Outro</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-6">
                        {/* <img src={course?.img} alt="about" className="img-fluid" data-aos="fade-down"
                            data-aos-delay='500' /> */}
                        <video width='400' height='250' controls>
                            <source src={course?.video} type='video/mp4' />
                        </video>
                        <h4 className='text-black mt-5'>Introduction</h4>
                        <p className='text-black'>{course?.desc}</p>
                        <button className='login-btn' style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Enroll for {course?.isFree === true ? 'Free' : course?.price + ' ' + '৳'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;