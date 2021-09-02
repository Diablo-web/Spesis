import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Subheader } from '../Subheader/Subheader'
import './styles.css';
 
export const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="border-bottom border-dark">
                <Container> 
                    <Navbar.Brand>
                        <span className="text-pink">
                            <FaPhone /> 1234567890
                        </span>
                    </Navbar.Brand>
                    <Navbar.Brand className="mx-auto fs-2">
                        <span className="text-pink">
                            Sepsis
                        </span>
                    </Navbar.Brand>
                </Container>
                <Nav className="mx-auto">
                    <Col md="12">
                    <Row md="2" className="ms-2 me-2">
                        <Col className="d-flex justify-content-center">
                            <Button as={Link} to="/register" variant="" className="buttonCss ps-4 pe-4 rounded-pill">
                                SignUp
                            </Button>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Button as={Link} to="/login" variant="" className="buttonCss ps-4 pe-4 rounded-pill">
                                SignIn
                            </Button>
                        </Col>
                    </Row>
                    </Col>
                </Nav>
            </Navbar>
            <Subheader />
        </>
    )
}
