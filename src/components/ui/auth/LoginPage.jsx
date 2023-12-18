import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/login', Object.fromEntries(new FormData(e.target)));
    if (response.status === 200) {
      window.location = '/';
    }
  };
  return (
    <Form onSubmit={submitHandler} className="mt-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        login
      </Button>
    </Form>
  );
}
