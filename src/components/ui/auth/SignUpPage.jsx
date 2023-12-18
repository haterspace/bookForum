import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function SignUpPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    repeat: '',
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeat) {
      alert('Password do not match');
      return;
    }
    const response = await axios.post('/auth/signup', formData);
    if (response.status === 200) {
      window.location = '/';
    }
  };

  return (
    <Form onSubmit={submitHandler} className="mt-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="username"
          value={formData.name}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          type="password"
          name="repeat"
          placeholder="repeat password"
          value={formData.repeat}
          onChange={changeHandler}
          isValid={formData.password === formData.repeat && formData.repeat !== ''}
          isInvalid={formData.password !== formData.repeat}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  );
}
