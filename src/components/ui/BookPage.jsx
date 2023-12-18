/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router';
import BookCard from './BookCard';
import OneComment from './oneComment';

// отображение отзывов
// добавление отзывов
function BookPage({ oneBook, comments, user }) {
  const [needToSlice, setNeedToSlice] = useState(false);
  const [commData, setCommData] = useState(comments);

  const [formData, setFormData] = useState({ body: '' });

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { id } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`/comment/add/${id}`, formData)
      .then((res) => {
        setCommData((prev) => [...prev, res.data]);
        setFormData({ body: '' });
      })
      .catch((err) => console.log('----', err.response.formData));
  };
  return (

    <Container>
      <div className="row">
        <div className="col-4">
          <BookCard user={user} book={oneBook} needToSlice={needToSlice} />
        </div>

        <div className="col-6 m-2">
          <Form onSubmit={submitHandler}>
            <input type="text" name="body" id="comment" placeholder="напиши отзыв" value={formData.body} onChange={changeHandler} />
            <Button variant="success" type="submit">добавить отзыв</Button>
          </Form>
          <div />
          {
            commData.map((comment) => (
              <OneComment comment={comment} />
            ))
        }
        </div>
      </div>

    </Container>
  );
}

export default BookPage;
