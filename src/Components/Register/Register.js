import React from 'react'
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './styles.css';
import '../../Styles/globlaStyles.css';
import { Link } from 'react-router-dom';

export const Register = () => {

    const handleForm = (e) => {
        e.preventDefault()
        console.log('hello Register');
    }

    return (
        <Row className="mt-3">
            <Col xs="10" sm="6" md="5" lg="4" className="mx-auto">
                <Card className="content">
                    <Card.Header className="bg-palevioletred fs-3 text-center text-light">
                        Sign Up
                    </Card.Header>
                    <Card.Body>
                    <Form onSubmit={handleForm}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <FloatingLabel label="First Name">
                                        <Form.Control type="text" placeholder="First Name" className="content fs-5"
                                        required minLength="3" maxLength="15"/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <FloatingLabel label="Last Name">
                                        <Form.Control type="text" placeholder="Last Name" className="content fs-5"
                                        required minLength="3" maxLength="15"/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Email">
                                <Form.Control type="email" placeholder="Email" required className="content fs-5"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Password">
                                <Form.Control type="password" placeholder="Password" required className="content fs-5"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Remember me" className="text-palevioletred fs-5"/>
                        </Form.Group>
                        <hr className="hr-1"/>
                        <Button variant="" type="submit" className="w-100 bg-palevioletred text-light mb-3">
                            Sign Up
                        </Button>
                        <Form.Group className="text-end">
                            Already a user ➡ 
                            <Card.Link as={Link} to="/login"> Sign In</Card.Link>
                        </Form.Group>
                    </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
