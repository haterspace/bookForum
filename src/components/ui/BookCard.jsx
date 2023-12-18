import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { Container, Radio, Rating } from './RatingStyles';
import Heart from './Heart';
import EmptyHeart from './emptyHeart';

function BookCard({
  book, needToSlice, deleteBookHandler, user, deleteLikedBookHandler, allLikedBooks,
}) {
  const [liked, setLiked] = useState([]);
  const [rate, setRate] = useState(0);
  const [hasLike, setHasLike] = useState(false);

  useEffect(() => {
    let neededElem = false;
    const check = (allLikedBooks?.map((elem) => {
      neededElem = (elem.book_id === book.id);
    }));
    setHasLike(neededElem);
  }, []);
  const ratingHandler = async (id, rating) => {
    axios
      .post(`/crud/rating/${id}`, { rate: rating })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => console.log('----', err.response.data));
  };

  const addToLiked = (id) => {
    if (!liked.some((likedCb) => likedCb.id === book.id)) {
      axios
        .post(`/api/liked/${id}`)
        .then((res) => {
          // console.log(res);
          setLiked([...liked, book]);
        });
    }
  };

  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`/img/${book.file}`}
        style={{ height: '25vh' }}

      />
      <Card.Body>
        <Card.Title style={{ height: '5vh' }}>{book.name}</Card.Title>
        <Card.Title style={{ height: '5vh' }}>
          Autor:
          {' '}
          {book.author}
        </Card.Title>
        <Card.Title style={{ height: '2vh' }}>{`Rating:${Math.floor(book.rating / 5)}/5`}</Card.Title>

        <Card.Text style={{ height: '20vh' }}>
          {needToSlice ? `${(book.description.slice(0, 150))}...` : book.description}
        </Card.Text>
        <Button variant="primary" href={`/book/${book.id}`} style={{ height: '3vh' }}>Смотреть</Button>
        <Card.Text>
          {/* rating */}
          <Container>
            {[...Array(5)].map((item, index) => {
              const givenRating = index + 1;
              return (
                <label key={`${givenRating}rating`}>
                  <Radio
                    type="radio"
                    value={givenRating}
                    onClick={() => {
                      setRate(givenRating);
                      ratingHandler(book.id, givenRating);
                    }}
                  />
                  <Rating>
                    <FaStar
                      color={
                                    givenRating < rate || givenRating === rate
                                      ? '000'
                                      : 'rgb(192,192,192)'
                                }
                    />
                  </Rating>
                </label>
              );
            })}
          </Container>
        </Card.Text>
        <Card.Text>
          {user
          && (
          <>
            <Button
              variant="primary"
              href="#"
              onClick={() => {
                setHasLike((prev) => prev = !prev);
                if (hasLike) {
                  deleteLikedBookHandler(book.id);
                } else { addToLiked(book.id); }
              }}
            >
              {hasLike === true ? <Heart /> : <EmptyHeart />}
              {/* Добавить в избранное */}

            </Button>
            {book.user_id === user.id && (
            <Button variant="danger" onClick={() => deleteBookHandler(book.id)}>удалить</Button>
            )}
          </>
          )}

        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
