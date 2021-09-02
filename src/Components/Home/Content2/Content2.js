import React from 'react'
import { Col, Row } from 'react-bootstrap'
import content21 from '../Image/content21.jpg'
import content22 from '../Image/content22.jpg'
import content23 from '../Image/content23.jpg'
import './styles.css'

export const Content2 = () => {
    return (
        <>
        <Row xs="1" sm="1" md="2" className="pt-5 pb-5">
            <Col xs={{order: 2}} sm={{order: 2}} md={{order: 1}}>
                <div className="ps-2 pe-5 mb-5">
                    <div className="text-purple fs-1 col-md-8">
                        Make sense of your symptoms
                    </div>
                </div>
                <div className="ps-2 mb-5">
                    <div className="text-info fs-4">
                        Taking an online test could be the first step towards getting 
                        the help that’s right for you.
                    </div>
                </div>
                <div className="ps-2 text-light">
                    <button className="btn btn button-pink text-light rounded-pill fs-4 pt-3 pb-3 ps-5 pe-5">
                        Our online tests
                    </button>
                </div>
            </Col>
            <Col xs={{order: 1}} sm={{order: 1}} md={{order: 2}}>
                <img src={content21} alt="" height="450px" className="img-curve img-fluid"/>
            </Col>
        </Row>
        <Row xs="1" sm="1" md="2" className="pt-5 pb-5">
            <Col>
                <img src={content22} alt="" height="450px" className="img-curve img-fluid"/>
            </Col>
            <Col>
                <div className="ps-2 pe-5 mb-5">
                    <div className="text-purple fs-1 col-md-8">
                        Make sense of your symptoms
                    </div>
                </div>
                <div className="ps-2 mb-5">
                    <div className="text-info fs-4">
                        Taking an online test could be the first step towards getting 
                        the help that’s right for you.
                    </div>
                </div>
                <div className="ps-2 text-light">
                    <button className="btn btn button-pink text-light rounded-pill fs-4 pt-3 pb-3 ps-5 pe-5">
                        Our approach
                    </button>
                </div>
            </Col>
        </Row>
        <Row xs="1" sm="1" md="2" className="pt-5 pb-5">
            <Col xs={{order: 2}} sm={{order: 2}} md={{order: 1}}>
                <div className="ps-2 pe-5 mb-5">
                    <div className="text-purple fs-1 col-md-8">
                        Make sense of your symptoms
                    </div>
                </div>
                <div className="ps-2 mb-5">
                    <div className="text-info fs-4">
                        Taking an online test could be the first step towards getting 
                        the help that’s right for you.
                    </div>
                </div>
                <div className="ps-2 text-light">
                    <button className="btn btn button-pink text-light rounded-pill fs-4 pt-3 pb-3 ps-5 pe-5">
                        About us
                    </button>
                </div>
            </Col>
            <Col xs={{order: 1}} sm={{order: 1}} md={{order: 2}}>
                <img src={content23} alt="" height="450px" className="img-curve img-fluid"/>
            </Col>
        </Row>
        </>
    )
}
