import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddBook({ allBooks }) {
  const [book, setBook] = useState({
    file: '',
    name: '',
    description: '',
    author: '',
  });
  const [books, setBooks] = useState(allBooks || []);
  const submitHandler = (e) => {
    e.preventDefault();

    if (!e.target.description.value || !e.target.name.value || !e.target.author.value || !e.target.file.files[0]) return;
    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('description', e.target.description.value);
    formData.append('author', e.target.author.value);

    formData.append('file', e.target.file.files[0]);
    e.target.reset();
    axios
      .post('/crud', formData)
      .then((res) => {
        console.log(res);

        setBooks([...allBooks, res]);
      })
      .catch((err) => console.log('----', err.response.data));

    window.location = '/';
  };

  const changeHandler = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Обложка для Вашей книги</Form.Label>
        <Form.Control type="file" name="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название книги</Form.Label>
        <Form.Control name="name" onChange={changeHandler} type="text" placeholder="Название книги" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Краткое описание</Form.Label>
        <Form.Control name="description" onChange={changeHandler} type="text" placeholder="Краткое описание" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Автор</Form.Label>
        <Form.Control name="author" onChange={changeHandler} type="text" placeholder="Имя автора" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}

export default AddBook;
