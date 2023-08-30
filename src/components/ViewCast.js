import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import LineGraph from "./Linegraph";

function ViewCast() {
  const numCards = 20; // Number of cards to generate
  const apiUrl = "http://127.0.0.1:8000/Measles_forecast"; // Replace with the actual API endpoint

  const [weekData, setWeekData] = useState([
    223, 123, 117, 178, 229, 224, 209, 226, 235, 249, 260, 266, 271, 278, 286,
    298, 295, 301, 303, 305,
  ]); // State to hold fetched data
  const [real_data, setReal_data] = useState([
    223, 123, 117, 178, 229, 224, 209, 226, 246, 257, 312, 241, 338, 432, 341,
    355, 344, 292, 329, 324,
  ]);
  useEffect(() => {
    // Fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setWeekData(response.data[1]); // Update the state with fetched data
        setReal_data(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      // const weekInfo = weekData[i] || {}; // Get data for the week (if available)
      // const cases = weekInfo.cases || "N/A"; // Get cases count or use "N/A"

      cards.push(
        <Col key={i} md={6} style={{ marginBottom: "10px" }}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>WEEK {i + 1}</Card.Title>
              <Card.Text>THIS IS THE PREDICTION FOR WEEK {i + 1}</Card.Text>
              <Card.Text>
                THERE WILL BE{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {Math.round(weekData[i])}
                </span>{" "}
                CASES
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return cards;
  };

  return (
    <div>
      <h3>THESE ARE THE PREDICTION OF MEASLES</h3>
      <Row>{generateCards()}</Row>
      <h2>ACTUAL VALUE</h2>
      <LineGraph data={real_data} />
      <h2>PREDICTED VALUE</h2>
      <LineGraph data={weekData} />
    </div>
  );
}

export default ViewCast;
