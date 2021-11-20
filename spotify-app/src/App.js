/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Hompage from "./Components/Homepage";
import Goodmorning from "./Components/Goodmorning";
import TopNavigation from "./Components/TopNavigation";

import { Row, Col } from "react-bootstrap";
import Yourshows from "./Components/Yourshows";
import MiddleCards from "./Components/MiddleCards";

function App() {
  return (
    <Row>
      <Col md={3}>
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
  );
}

export default App;
