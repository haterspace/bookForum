import express from 'express';
import { Comment, User } from '../../db/models';

const commentRouter = express.Router();

commentRouter.post('/add/:id', async (req, res) => {
  const createdComment = await Comment.create({
    user_id: req.session?.user?.id,
    book_id: req.params.id,
    body: req.body.body,
  });

  const comment = await Comment.findOne({
    where: { id: createdComment.id },
    include: { model: User },
  });

  res.json(comment);
});

// commentRouter.get('/:id', async (req, res) => {
//   const comments = await Comment.findAll({
//     where: { book_id: req.params.id },
//     include: [{ model: User }],
//   });
//   console.log(comments);
//   res.render('Layout', { comments });
// });

export default commentRouter;
