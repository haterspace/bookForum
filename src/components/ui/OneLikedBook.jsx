import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OneLikedBook({ book, deleteBookHandler }) {
  const [needToSlice, setNeedToSlice] = useState(true);
  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`/img/${book.Book.file}`}
        style={{ height: '35vh' }}
      />
      <Card.Body>
        <Card.Title style={{ height: '5vh' }}>{book.Book.name}</Card.Title>
        <Card.Title style={{ height: '5vh' }}>
          Autor:
          {' '}
          {book.Book.author}
        </Card.Title>
        <Card.Title style={{ height: '2vh' }}>{`Rating:${Math.floor(book.Book.rating / 5)}/5`}</Card.Title>

        <Card.Text style={{ height: '20vh' }}>
          {needToSlice ? `${(book.Book.description.slice(0, 150))}...` : book.Book.description}
        </Card.Text>
        <Button variant="primary" href={`/book/${book.Book.id}`} style={{ height: '3vh' }}>Смотреть</Button>
        <Card.Text>
          <Button variant="primary" className="btn btn-danger" onClick={() => deleteBookHandler(book.id)}>Удалить из избранного</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OneLikedBook;
