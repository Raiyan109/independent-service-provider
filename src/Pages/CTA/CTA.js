import React from 'react';
import './CTA.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const CTA = () => {
    return (
        <div className='cta-container'>
            <Container>
                <Row>
                    <Col sm className='pe-5'>
                        <h1>Try some of our classes</h1>
                        <h3 style={{ fontSize: '20px', color: 'gray' }}>Enter your email and we'll send you some samples of our favorite classes</h3>
                    </Col>
                    <Col sm className='ps-5'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CTA;