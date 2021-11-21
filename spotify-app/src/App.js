/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Hompage from "./Components/Homepage";
import Goodmorning from "./Components/Goodmorning";
import TopNavigation from "./Components/TopNavigation";
import { Row, Col, Container } from "react-bootstrap";
import Yourshows from "./Components/Yourshows";
import MiddleCards from "./Components/MiddleCards";
import Playbar from "./Components/Playbar";

function App() {
  return (
    <Container fluid>
      <Row className="px-0">
        <Col md={3} className="px-0">
          <MyNav />
        </Col>
        <Col md={9}>
          <Col>
            <TopNavigation />
          </Col>
          <Col>
            <Goodmorning />
          </Col>
          <Col>
            <Hompage />
          </Col>
          <Col>
            <Yourshows />
          </Col>
          <Col>
            <MiddleCards />
          </Col>
        </Col>
      </Row>
      <Playbar/>
    </Container>
  );
}

export default App;
