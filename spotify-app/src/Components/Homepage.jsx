import { Col, Container, Row, Card } from "react-bootstrap"

const Homepage = () => {
    return (

        <div className="home-page-body ">
            <Container className="ml-n5">
                <Row >
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}md={4} className="my-1" >
                        <Card style={{ width: '19rem', height: '5rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Homepage