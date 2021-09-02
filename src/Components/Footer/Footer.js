import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import IndianEmblemIcon from '../../Images/Indian-Emblem.jpg'

export const Footer = () => {
    return (
        <div className="bg-dark text-light p-2 mt-5">
            <Row xs="1" sm="2" md="4">
                <Col md="3" className="p-4">
                    <Card>
                        <Card.Img src={IndianEmblemIcon} height="230px"/>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card className="bg-dark text-light w-100">
                        <Card.Body>
                            <Card.Title>
                                Quick Links
                            </Card.Title>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card className="bg-dark text-light w-100">
                        <Card.Body>
                            <Card.Title>
                                Quick Links
                            </Card.Title>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card className="bg-dark text-light w-100">
                        <Card.Body>
                            <Card.Title>
                                Quick Links
                            </Card.Title>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                            <Card.Text>
                                Links
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Col className="d-flex justify-content-center">
                <Button variant="outline-primary" className="ms-1 me-1 fs-5">
                    <FaFacebookF />
                </Button>
                <Button variant="outline-info" className="ms-1 me-1 fs-5">
                    <FaTwitter />
                </Button>
                <Button variant="outline-danger" className="ms-1 me-1 fs-5">
                    <FaInstagram />
                </Button>
                <Button variant="outline-light" className="ms-1 me-1 fs-5">
                    <FaGithub />
                </Button>
            </Col>
        </div>
    )
}
