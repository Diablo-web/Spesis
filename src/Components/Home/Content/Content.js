import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Content2 } from '../Content2/Content2'
import content1 from '../Image/contentImg1.jpg'
import content2 from '../Image/contentImg2.png'
import content3 from '../Image/contentImg3.jpg'
import './styles.css'

export const Content = () => {
    return (
        <Container className="mx-auto">
            <Row xs="1" sm="1" md="3" className="g-4">
                <Col>
                    <Card className="bg-light card-curve">
                        <Card.Img src={content1} className="card-curve"/>
                        <Card.Body>
                            <Card.Title className="fs-3 text-primary col-md-8">
                                Starting Therapy – 5 common questions answered
                            </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="fs-5 text-danger">
                                Read Article
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-light card-curve">
                        <Card.Img src={content2} className="card-curve"/>
                        <Card.Body>
                            <Card.Title className="fs-3 text-primary col-md-8">
                                Starting Therapy – 5 common questions answered
                            </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="fs-5 text-danger">
                                Read Article
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-light card-curve">
                        <Card.Img src={content3} className="card-curve"/>
                        <Card.Body>
                            <Card.Title className="fs-3 text-primary col-md-8">
                                Starting Therapy – 5 common questions answered
                            </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="fs-5 text-danger">
                                Read Article
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Content2 />
        </Container>
    )
}
