import { Navbar, Nav, Col, } from 'react-bootstrap'
import { IconContext } from "react-icons"
import { RiSearch2Line } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Spotify_Logo_RGB_White from "./assets/Spotify_Logo_RGB_White.png"
import lateralus from "./assets/lateralus.jpeg"

const MyNav = () => {
    return (
        
            <Col className="ml-n5">
                <Navbar bg="dark" variant="dark"
                    className="side-bar flex-column d-lg-block"
                >
                    <Navbar.Brand >
                        <img src={Spotify_Logo_RGB_White} alt="spotify"
                        style={{width: "165px", height:"50px"}} 
                        className="my-2"/>
                    </Navbar.Brand>
                    <Nav className="mr-auto flex-column">

                    <IconContext.Provider value={{ color: "white", size:"25px"}}>
                        <div className="d-flex align-items-center">
                            <IoHomeOutline className="mx-1" />
                            <div className="nav-link mt-1"> Home</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <RiSearch2Line className="mx-1"/>
                            <div className="nav-link mt-1"> Search</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <VscLibrary className="mx-1"/>
                            <div className="nav-link mt-1"> Your Library</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <AiOutlinePlusSquare className="mx-1"/>
                            <div className="nav-link mt-1"> Creat Playist</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <BsSuitHeart className="mx-1"/>
                            <div className="nav-link mt-1"> Liked Songs</div>
                        </div>

                        
                        </IconContext.Provider>





                        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form> */}
                        <div className="vertical-menu my-2"
                            bg="dark" variant="dark">
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                            <div className="nav-link">track</div>
                        </div>
                        {/* <Col md={12}> */}
                        <img src={lateralus} alt="lateralus"/>
                        {/* </Col> */}
                    </Nav>
                </Navbar>
            </Col>
        
    )
}
export default MyNav