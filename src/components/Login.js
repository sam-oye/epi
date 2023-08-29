import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for redirection

function Login() {
  const navigate = useNavigate(); // Get the history object for redirection

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dictionary = {
    "sam@gmail.com": "123", // Replace with your dictionary values
    // Add more email-password pairs as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dictionary[email] === password) {
      // Password matches the dictionary
      // Perform any other necessary actions
      // Redirect to another page
      navigate(`/admin`);
    } else {
      // Password does not match
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
