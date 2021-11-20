import lateralus from "./assets/lateralus.jpeg"
import { Row, Col, Card, Navbar } from 'react-bootstrap'

const Playbar = () => {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light"
            className="play-bar mx-n3">
                <Col md={4}>
                    <Card.Img
                        variant="top" src={lateralus}
                        style={{ maxWidth: "67px", height: "67px" }} />
                    <Card.Title className="text-justify mt-2"
                        style={{ fontSize: "18px" }}
                    >Card Title</Card.Title>
                    <Card.Title className="text-justify"
                        style={{ fontSize: "14px" }}
                    >Card Title</Card.Title>

                </Col>
                <Col md={4}>
                </Col>
                <Col md={4}>
                </Col>

                {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}

            </Navbar>
        </div>
    )

}
export default Playbar