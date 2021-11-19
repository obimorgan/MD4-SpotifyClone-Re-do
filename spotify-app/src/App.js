/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Hompage from "./Components/Homepage"
import { Row, Col } from "react-bootstrap";


function App() {
  return (

      <Row>
        <Col md={3}>
          <MyNav />
        </Col>
        <Col md={9}>
          <Hompage />
        </Col>
      </Row>

  );
}

export default App;
