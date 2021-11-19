import { Col, Container, Row, Card } from "react-bootstrap"

const Homepage = () => {
    return (

        <Col className="home-page-body px-n1 mx-n5">
            <Container fluid>
                <Row>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '16rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '16rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '16rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '16rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '16rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '16rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}
export default Homepage