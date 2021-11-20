import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Container, Col } from 'react-bootstrap'
import { IconContext } from "react-icons"
import Dropdown from 'react-bootstrap/Dropdown'

const TopNavigation = () => {
    return (
        <Container>
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
                <div className="d-flex justify-content-between ml-n5">
                    <div>
                        <div>
                            < IoIosArrowDropleftCircle />
                            < IoIosArrowDroprightCircle />
                        </div>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
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