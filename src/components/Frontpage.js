import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Frontpage() {
  const cardStyle = {
    // width: "30rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
  };
  return (
    <div style={cardStyle}>
      <>
        <Card className="p-5">
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>HOW CAN WE HELP YOU TODAY</Card.Title>
            <Card.Text>WELCOME TO EPIDEMOLOGY CENTER WHERE ...</Card.Text>

            <Dropdown>
              {/* <Button as="input" type="reset" value="LOGIN" href={`/login/`} /> */}
              <Link to="/login" className="btn btn-primary">
                LOGIN
              </Link>
              <> </>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                VIEW FORECAST
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/viewcast">MEASLES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </>
    </div>
  );
}

export default Frontpage;
