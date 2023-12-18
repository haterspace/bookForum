import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import crudRouter from './routes/crudRouter';
import resLocals from './middlewares/resLocals';
import commentRouter from './routes/commentRouter';
import authRouter from './routes/authRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public')); // какие файлы общедоступные
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // нужна чтообы собирать данные с формы в рек бади
app.use(express.json()); // чтобы в рек бади получить нужные данные
app.use(session(sessionConfig));
app.use(resLocals);

app.use('/', indexRouter);
app.use('/crud', crudRouter);
app.use('/api', apiRouter);
app.use('/comment', commentRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
