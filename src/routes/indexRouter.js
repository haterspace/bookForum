import express from 'express';
import {
  Book, Comment, User, Liked,
} from '../../db/models';
// отображение страниц книг
import { checkAuth } from '../middlewares/auth';

const router = express.Router();

router.get('/', async (req, res) => {
  const allBooks = await Book.findAll();
  const userSid = req.session.user;
  let initState = {};

  if (userSid) {
    const allLikedBooks = await Liked.findAll({
      where: {
        user_id: req.session?.user?.id,
      },
      include: {
        model: Book, // включаем связанную модель Book
      },
    });
    initState = { allBooks, allLikedBooks };
  } else {
    initState = { allBooks };
  }
  res.render('Layout', initState);
});

router.get('/book/:id', async (req, res) => {
  const oneBook = await Book.findOne({ where: { id: req.params.id } });
  const comments = await Comment.findAll({
    where: { book_id: req.params.id },
    include: { model: User },
  });
  res.render('Layout', { oneBook, comments });
});
router.get('/liked', async (req, res) => {
  const allLikedBooks = await Liked.findAll({
    where: {
      user_id: req.session?.user?.id,
    },
    include: {
      model: Book, // включаем связанную модель Book
    },
  });
  // console.log(allLikedBooks);
  res.render('Layout', { allLikedBooks });
});

router.get('/signup', checkAuth(false), async (req, res) => {
  res.render('Layout');
});

router.get('/login', checkAuth(false), async (req, res) => {
  res.render('Layout');
});

router.get('/addBook', async (req, res) => {
  res.render('Layout');
});

export default router;
