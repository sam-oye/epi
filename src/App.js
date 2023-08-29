import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import Login from "./components/Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Admin from "./components/Admin";
import ViewCast from "./components/ViewCast";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router className="App ">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="auto">
            {" "}
          </Col>
          <Col md="8">
            <Header />
            <></>
            <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/viewcast" element={<ViewCast />} />
            </Routes>
            {/* <Login /> */}
            {/* <Admin /> */}
            {/* <ViewCast /> */}
          </Col>
          <Col xs lg="3">
            <Link to="/" className="btn btn-success">
              HOME PAGE
            </Link>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
