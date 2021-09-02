import React from 'react'
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './styles.css';
import '../../Styles/globlaStyles.css';
import { Link } from 'react-router-dom';

export const Login = () => {

    const handleForm = (e) => {
        e.preventDefault()
        console.log('hello login');
    }

    return (
        <Row className="mt-3">
            <Col xs="10" sm="6" md="5" lg="4" className="mx-auto">
                <Card className="content">
                    <Card.Header className="bg-palevioletred fs-3 text-center text-light">
                        Sign In
                    </Card.Header>
                    <Card.Body>
                    <Form onSubmit={handleForm}>
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
                        <hr className="hr-1"/>
                        <Button variant="" type="submit" className="w-100 bg-palevioletred text-light mb-3">
                            Sign In
                        </Button>
                        <Form.Group className="text-end">
                            Create a account ➡ 
                            <Card.Link as={Link} to="/register"> Sign Up</Card.Link>
                        </Form.Group>
                    </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
