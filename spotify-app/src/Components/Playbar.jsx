import lateralus from "./assets/lateralus.jpeg"
import { BsSuitHeart } from "react-icons/bs"
import { Col, Card, Navbar } from 'react-bootstrap'
import { BsPip } from "react-icons/bs"
import { IoIosShuffle, IoIosRepeat } from "react-icons/io";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg"
import { AiFillPlayCircle } from "react-icons/ai"


const Playbar = () => {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light"
                className="play-bar px-0">
                <Col md={3} className="d-flex">
                    <Card.Img
                        src={lateralus}
                        style={{ maxWidth: "67px", height: "67px" }} />
                    <Col className="m-auto">
                        <Card.Title
                            style={{ fontSize: "18px" }}
                        >Card Title
                        </Card.Title>
                        <Card.Title
                            style={{ fontSize: "14px" }}
                        >Card Title
                        </Card.Title>
                    </Col>
                    <div className="my-auto px-1">
                        <BsSuitHeart />
                    </div>
                    <div className="my-auto px-1">
                        <BsPip />
                    </div>

                </Col>
                <Col md={6}>
                    <div className="m-auto">
                        <div className="d-flex align-items-center justify-content-center">
                            <IoIosShuffle />
                            <CgPlayTrackPrev />
                            <AiFillPlayCircle />
                            <CgPlayTrackNext />
                            <IoIosRepeat />

                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <IoIosShuffle />
                            <IoIosShuffle />
                        </div>
                    </div>
                </Col>
                <Col md={3} className="d-flex">

                </Col>

                {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}

            </Navbar>
        </div>
    )

}
export default Playbar