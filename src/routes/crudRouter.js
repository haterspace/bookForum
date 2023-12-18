import express from 'express';
import fs from 'fs/promises';
import sharp from 'sharp';
import upload from '../middlewares/multer';
import { checkAuthor } from '../middlewares/auth';
import { Book, Liked } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.post('/', upload.single('file'), async (req, res) => {
  try {
    // проверяем наличие файла
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }
    // создаем имя файла с расширением webp и привязкой к дате
    const namee = `${Date.now()}.webp`;
    // console.log(namee);
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    await fs.writeFile(`./public/img/${namee}`, outputBuffer);
    // создаем пост в бд
    const { name, author, description } = req.body;
    const addBookToDB = await Book.create({
      user_id: req.session?.user?.id,
      file: namee,
      name,
      author,
      description,
      rating: 0,
    });
    res.status(200).json(addBookToDB);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', checkAuthor, async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    fs.unlink(`./public/img/${book.file}`).catch((e) => console.log(e));
    if (!book) {
      res.status(404).json({ message: 'Post not found' });
    }
    await book.destroy();
    res.json({ message: 'Post deleted' });
  } catch (e) {
    console.log(e);
  }
});
router.post('/rating/:id', async (req, res) => {
  try {
    const data = await req.body;
    await Book.increment(
      { rating: data.rate },
      { where: { id: req.params.id } },
    );
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
