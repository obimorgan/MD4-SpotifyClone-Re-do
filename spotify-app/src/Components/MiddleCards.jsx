import { Col, Container, Row, Card } from "react-bootstrap"

const MiddleCards = ({ queenData }) => (
    {
        queenData.map(d => (


            <div className="middle-cards">
                <Container>
                    <Row className="d-flex justify-content-between">
                        <Col sm={6} md={2} className=" my-1 mx-1" >
                            <Card style={{ width: '12rem', height: '16rem' }}
                                className="top-card">
                                <Card.Body className="flex-column">
                                    <Card.Img
                                        variant="top" key={d.id} src={d.album.cover_small}
                                        style={{ maxWidth: "150px", height: "150px", borderRadius: "15px" }}
                                        className="" />
                                    <Card.Title className="text-justify mt-2"
                                        style={{ fontSize: "18px" }}
                                    >{d.album.name}</Card.Title>
                                    <Card.Title className="text-justify"
                                        style={{ fontSize: "14px" }}
                                    >{d.artist.name} </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        ))
    }
)
export default MiddleCards