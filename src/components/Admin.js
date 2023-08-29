import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom"; // Import useHistory for redirection

function Admin() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(" "); // State to track selected week
  const [formData, setFormData] = useState({
    // selectedDisease: "",
    week_1: "",
    week_2: "",
    week_3: "",
    week_4: "",
    week_5: "",
    week_6: "",
    week_7: "",
    week_8: "",
  });

  const [post, setPost] = useState(null); // State to store the response data

  const createPost = () => {
    axios
      .post("http://127.0.0.1:8000/Measles_forecaster", formData)
      .then((response) => {
        setPost(response.data);
        console.log(post);
        navigate(`/viewcast`);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can now access the form data in the 'formData' object
    console.log("Form Data:", formData);

    // Check for missing data
    const missingFields = Object.keys(formData).filter(
      (field) => !formData[field]
    );
    if (missingFields.length > 0) {
      alert(`Missing data for fields: ${missingFields.join(", ")}`);
      return;
    }
    createPost();
    // Form data is complete, proceed
    setValidated(true);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleWeekSelect = (disease) => {
    setSelectedWeek(disease);
    handleInputChange("selectedDisease", disease);
  };
  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="py-3"
      >
        {/* Display selected week */}

        {/* Dropdown */}
        <Row>
          <Col>
            <Dropdown className="mb-3">
              <Dropdown.Toggle variant="primary" id="dropdown-week">
                SELECT DISEASE
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleWeekSelect("MEASLES")}>
                  MEASLES
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <h5>Selected Disease: {selectedWeek}</h5>
          </Col>
        </Row>
        <Row className="auto">
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK ONE </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK ONE"
                value={formData.week_1}
                onChange={(e) => handleInputChange("week_1", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK TWO </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK TWO"
                value={formData.week_2}
                onChange={(e) => handleInputChange("week_2", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <p></p>
        <Row className="auto">
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK THREE </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK THREE"
                value={formData.week_3}
                onChange={(e) => handleInputChange("week_3", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK FOUR </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK FOUR"
                value={formData.week_4}
                onChange={(e) => handleInputChange("week_4", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <p></p>
        <Row className="auto">
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK FIVE </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK FIVE"
                value={formData.week_5}
                onChange={(e) => handleInputChange("week_5", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK SIX </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK SIX"
                value={formData.week_6}
                onChange={(e) => handleInputChange("week_6", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <p></p>
        <Row className="auto">
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK SEVEN </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK SEVEN"
                value={formData.week_7}
                onChange={(e) => handleInputChange("week_7", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Label>WEEK EIGHT </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="WEEK EIGHT"
                value={formData.week_8}
                onChange={(e) => handleInputChange("week_8", e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Button type="submit">PREDICT</Button>
        </Row>
      </Form>
    </div>
  );
}

export default Admin;
