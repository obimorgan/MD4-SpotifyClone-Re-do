import { Col, Container, Row, Card } from "react-bootstrap"
import lateralus from "./assets/lateralus.jpeg"

const Homepage = () => {
    return (

        <div className="home-page-body ">
            <Container className="ml-n5">
                <Row >
                    <Col sm={6} md={4} className=" my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}
                            className="top-card">
                            <Card.Body className="d-flex p-0">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "77px", height: "77px"}} />
                                <Card.Title className="ml-2 mt-4">Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className=" my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}
                            className="top-card">
                            <Card.Body className="d-flex p-0">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "77px", height: "77px"}} />
                                <Card.Title className="ml-2 mt-4">Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className=" my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}
                            className="top-card">
                            <Card.Body className="d-flex p-0">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "77px", height: "77px"}} />
                                <Card.Title className="ml-2 mt-4">Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className=" my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}
                            className="top-card">
                            <Card.Body className="d-flex p-0">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "77px", height: "77px"}} />
                                <Card.Title className="ml-2 mt-4">Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className=" my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}
                            className="top-card">
                            <Card.Body className="d-flex p-0">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "77px", height: "77px"}} />
                                <Card.Title className="ml-2 mt-4">Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className=" my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}
                            className="top-card">
                            <Card.Body className="d-flex p-0">
                            <Card.Img
                                variant="top" src={lateralus} 
                                style={{maxWidth: "77px", height: "77px"}} />
                                <Card.Title className="ml-2 mt-4">Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Homepage