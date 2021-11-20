import { Col, Container, Row, Card } from "react-bootstrap"
import lateralus from "./assets/lateralus.jpeg"

const MiddleCards = () => {
    return (

        <div className="middle-cards">
            <Container className="ml-n5">
                <Row >
                    <Col sm={6} md={3} className=" my-1" >
                        <Card style={{ width: '12rem', height: '16rem' }}
                            className="top-card">
                            <Card.Body className="flex-column">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "150px", height: "150px", borderRadius: "15px"}} 
                                className=""/>
                                <Card.Title className="text-justify mt-2"
                                style={{fontSize: "18px"}}
                                >Card Title</Card.Title>
                                <Card.Title className="text-justify"
                                style={{fontSize: "14px"}}
                                >Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default MiddleCards