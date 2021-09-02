import React from 'react'
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

export const Subheader = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="Sub-Header" />
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className="btn btn ps-5 pe-5 mb-1">
                            <span className="text-indigo">
                                HOME
                            </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/how-it-works" className="btn btn ps-5 pe-5 mb-1">
                            <span className="text-indigo">
                                HOW IT WORKS
                            </span>
                        </Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn form-control mb-1">
                                <span className="text-indigo">
                                    Test
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/rapid-test" className="dropdown-item-background mb-1">
                                    Rapid Test
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/advanced-test" className="dropdown-item-background">
                                    Advanced Test
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} to="/info" className="btn btn ps-5 pe-5 mb-1">
                            <span className="text-indigo">
                                INFO
                            </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" className="btn btn ps-5 pe-5 mb-1">
                            <span className="text-indigo">
                                CONTACT US
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
