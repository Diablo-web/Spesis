import React from 'react'
import { Col } from 'react-bootstrap'
import './styles.css'

export const Midbar = () => {
    return (
        <div className="bg-info text-light text-center p-2 fs-5">
            <Col md="10" className="mx-auto">
                <p>
                    Demand for our services is currently at an unprecedented level, and 
                    there may be a slight delay in responding to enquiries. Please rest 
                    assured, we are expanding our capacity as quickly as possible and 
                    apologise for any inconvenience caused in the meantime.
                </p>
            </Col>
        </div>
    )
}
