import express from 'express';
import { Liked } from '../../db/models';

const router = express.Router();

router.post('/liked/:id', async (req, res) => {
  const [liked, created] = await Liked.findOrCreate({
    where: {
      user_id: req.session?.user?.id,
      book_id: req.params.id,
    },
  });
  // console.log({ created });
  if (created) {
    res.sendStatus(200);
    return;
  }
  if (!created) {
    await Liked.destroy({ where: { id: liked.id } });
    res.sendStatus(200);
  }
});

router.delete('/liked/:id', async (req, res) => {
  const { id } = req.params;
  await Liked.destroy({
    where: { id },
  });
  res.sendStatus(200);
});
export default router;
