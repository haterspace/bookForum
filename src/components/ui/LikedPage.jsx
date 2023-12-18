import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import OneLikedBook from './OneLikedBook';

function LikedPage({ allLikedBooks }) {
  const [likedBooks, setLikedBooks] = useState(allLikedBooks);
  const deleteBookHandler = (bookId) => {
    axios
      .delete(`/api/liked/${bookId}`)
      .then((response) => {
        setLikedBooks((prev) => prev.filter((oneBook) => oneBook.id !== bookId));
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <Container>
      <Row className="mb-4">
        {/* xs={12} sm={6} md={4} lg={3} xl={2} */}
        {likedBooks?.map((book) => (
          <Col key={book.id} className="mb-4 mx-6">
            <OneLikedBook book={book} deleteBookHandler={deleteBookHandler} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LikedPage;
