import { Book } from '../../db/models';

export const checkAuth = (auth) => (req, res, next) => {
  if (!!req.session?.user !== auth) return res.sendStatus(401);
  return next();
};

export const checkAuthor = async (req, res, next) => {
  const { id } = req.params; // post id
  const book = await Book.findByPk(id);
  if (book.user_id !== req.session?.user?.id) return res.sendStatus(401);
  return next();
};
