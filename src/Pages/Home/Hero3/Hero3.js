import React from 'react';
import './Hero3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Stack } from 'react-bootstrap';
import studentImg from '../../../Images/madrasa student smile.jpg'

const Hero3 = () => {
    return (
        <div>
            <div className='hero3-container'>
                <Container>
                    <Row>
                        <Col xs={6} md={6} className='pe-5'>
                            <div className='hero3-left'>



                            </div>
                            <Stack gap={3}>
                                <h1>The Best Way To Learn Online Courses</h1>
                                <h3 style={{ fontSize: '20px', color: 'gray' }}>In this world engage, challange, and support in all in on place</h3>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className='hero3-btn' style={{ color: '#fff', }}>Get Started</button>
                                </div>
                            </Stack>
                        </Col>
                        <Col xs={6} md={6} className='ps-5'>
                            <Image src={studentImg} rounded width={350} height={350} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Hero3;