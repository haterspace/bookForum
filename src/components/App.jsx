import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import LikedPage from './ui/LikedPage';
import AddBook from './ui/AddBook';
import HomePage from './ui/HomePage';
import BookPage from './ui/BookPage';
import SignUpPage from './ui/auth/SignUpPage';
import LoginPage from './ui/auth/LoginPage';

export default function App({
  allBooks, oneBook, comments, user, allLikedBooks,
}) {
  // console.log(allLikedBooks);
  return (
    <>

      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage allBooks={allBooks} user={user} allLikedBooks={allLikedBooks} />} />
        <Route path="/book/:id" element={<BookPage user={user} oneBook={oneBook} comments={comments} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addBook" element={<AddBook allBooks={allBooks} />} />
        <Route path="/liked" element={<LikedPage allLikedBooks={allLikedBooks} />} />
      </Routes>
    </>
  );
}
