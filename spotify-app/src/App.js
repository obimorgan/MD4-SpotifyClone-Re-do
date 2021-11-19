/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Hompage from "./Components/Homepage";
import Goodmorning from "./Components/Goodmorning";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <Row>
      <Col md={3}>
        <MyNav />
      </Col>
      <Col md={9}>
        <Col>
        </Col>
        <Col>
          <Goodmorning />
        </Col>
        <Col>
          <Hompage />
        </Col>
      </Col>
    </Row>
  );
}

export default App;
