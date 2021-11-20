import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Container } from 'react-bootstrap'
import { IconContext } from "react-icons"
import Dropdown from 'react-bootstrap/Dropdown'
import { CgProfile } from "react-icons/cg";

const TopNavigation = () => {
    return (
        <Container className="mt-3 mb-5">
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
                <div className="d-flex justify-content-between ml-n5">
                    <div>
                        <div>
                            < IoIosArrowDropleftCircle />
                            < IoIosArrowDroprightCircle />
                        </div>
                    </div>
                    <div>
                        <Dropdown >
                            <Dropdown.Toggle variant="dark" id="dropdown-basic"
                                style={{
                                    borderRadius: "50px", color: "white",
                                    backgroundColor: "black", width: "10rem", height: "33px"
                                }}
                                className="border-0"
                                >
                                <span className="ml-n2 mr-3 mb-1">
                                    <CgProfile color="white" size="28px"/>
                                </span>
                                <span>
                                    spotthedot9
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
            </IconContext.Provider>
        </Container>



    )
}
export default TopNavigation