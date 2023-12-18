import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import BookCard from './BookCard';

function HomePage({ allBooks, user, allLikedBooks }) {
  const [books, setBooks] = useState(allBooks);
  const [needToSlice, setNeedToSlice] = useState(true);

  const deleteBookHandler = async (id) => {
    await axios
      .delete(`/addBook/${id}`)
      .then(() => {
        setBooks((prev) => prev.filter((book) => book.id !== id));
      })
      .catch((err) => console.log(err.response.data));
  };

  const deleteLikedBookHandler = (bookId) => {
    axios
      .delete(`/api/liked/${bookId}`)
      .then((response) => {
        console.log(response);
        // setLikedBooks((prev) => prev.filter((oneBook) => oneBook.id !== bookId));
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <CardGroup>

      {books?.map((book) => (
        <BookCard
          user={user || null}
          deleteBookHandler={deleteBookHandler}
          deleteLikedBookHandler={deleteLikedBookHandler}
          allLikedBooks={allLikedBooks}
          key={book.id}
          book={book}
          needToSlice={needToSlice}
        />
      ))}
    </CardGroup>
  );
}

export default HomePage;
