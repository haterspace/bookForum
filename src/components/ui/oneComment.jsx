import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function OneComment({ comment }) {
  return (
    <Card>
      {/* <Card.Header key={`head${comment.id}`}>{`${comment.createdAt}`}</Card.Header> */}
      <Card.Body key={`body${comment.id}`}>
        <Card.Title key={`title${comment.id}`}>{comment.User.name}</Card.Title>
        <Card.Text key={`body${comment.id}`}>
          {comment.body}
          {' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OneComment;
