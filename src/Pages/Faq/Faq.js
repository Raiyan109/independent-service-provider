import React from 'react';
import './Faq.css'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <div className='container mb-5'>
                <div className="row">
                    <h1 className='text-center mb-5 font'>What Services Do I Provide </h1>
                    <div className='faq-container'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is RKK Tuition?</Accordion.Header>
                                <Accordion.Body>
                                    RKK Tuition is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 180+ of the world’s best.


                                    Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is included in a MasterClass membership?</Accordion.Header>
                                <Accordion.Body>
                                    Membership includes access to an incredible catalog of 180+ classes taught by the world’s best on cooking, leadership, photography, writing and more.


                                    Each class includes around 20 video lessons that are 10 minutes long on average, along with an in-depth workbook. You also get access to our smartphone and TV apps, offline lessons, our members only newsletter, and our dynamic community of members around the world.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Which classes are right for me?</Accordion.Header>
                                <Accordion.Body>
                                    MasterClass offers 180+ classes across a variety of categories, including business and leadership, photography, cooking, writing, acting, music, sports and more. Every class has been designed to be accessible for people with little to no experience and advanced students alike. With new classes launching regularly, you can learn practical skills, ignite new passions, and get everyday wisdom.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;