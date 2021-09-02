import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap'
import { FaNotesMedical } from 'react-icons/fa'
import { RapidTestQuestions } from '../../../Questions/RapidTestQuestions/RapidTestQuestions'
import './styles.css'

export const RapidTest = () => {
    const Questions = RapidTestQuestions();
    const [select, setSelect] = useState('');
    const [next, setNext] = useState(1);
    const [ans, setAns] = useState([]);
    
    const nextQuest = (op) => {
        setAns([...ans, op]);
        setNext((prevNext) => prevNext+1);
        setSelect('');
    }

    const handleSelected = (op) =>{ 
        setSelect(op);
    }

    useEffect(() => {
        
    }, []);
 
    return (
        <Card>
            <Card.Header className="bg-warning text-light">
                <Card.Title className="fs-2 text-center">
                    <FaNotesMedical /> Rapid Test
                </Card.Title>
            </Card.Header>
            {
                Questions.map((quest) => (
                    <Card.Body hidden={next !== quest.id} key={quest.id}>
                        <Card.Title className="mb-3 questionCss text-light p-4 fs-3">
                            {quest.question} ?
                        </Card.Title>
                        <Col md="8" className="mb-3">
                            <Row md="2" className="gx-2 gy-4">
                                <Col>
                                    <Button onClick={()=>handleSelected(quest.option1)} variant="light" className="w-100 fs-5 shadow text-primary">
                                        {quest.option1}
                                    </Button>
                                </Col>
                                <Col>
                                    <Button onClick={()=>handleSelected(quest.option2)} variant="light" className="w-100 fs-5 shadow text-primary">
                                        {quest.option2}
                                    </Button>
                                </Col>
                                <Col>
                                    <Button onClick={()=>handleSelected(quest.option3)} variant="light" className="w-100 fs-5 shadow text-primary">
                                        {quest.option3}
                                    </Button>
                                </Col>
                                <Col>
                                    <Button onClick={()=>handleSelected(quest.option4)} variant="light" className="w-100 fs-5 shadow text-primary">
                                        {quest.option4}
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Row>
                            <Col className="d-flex justify-content-start">
                                <Button hidden={!select} variant="info" className="fs-5 shadow Ans">
                                    {select}
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button disabled={!select} onClick={() => nextQuest(select)} variant="info" className="fs-5 shadow Ans">
                                    Save & Next
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                ))
            }
            <div hidden={ans.length !== Questions.length}> 
            <Card.Title className="mb-3 questionCss text-light text-center p-4 fs-3">
                😃 Your result
            </Card.Title>
            <Card.Body hidden={ans.length !== 0}>
                <Card.Title className="fs-4 fw-bold">
                    You have not seleceted even a single option
                </Card.Title>
            </Card.Body> 
            {ans.map((a, i) => (
                <Card.Body key={i}>
                    <Card.Text variant="light" className="w-100 fs-4 p-4 shadow text-primary mb-3">
                    <Badge bg="primary rounded-circle fs-6">{i+1}</Badge> {a}
                    </Card.Text>
                </Card.Body>        
            ))}
            <Button as={Link} to="/success" variant="primary" className="w-100 fs-5 shadow mb-3">
                Close
            </Button>
            </div>
        </Card>
    )
}
