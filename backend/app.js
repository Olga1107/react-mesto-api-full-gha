require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const cors = require('cors');
const { login, createUser } = require('./controllers/users');
const { validationCreateUser, validationLogin } = require('./middlewares/validations');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const NotFoundError = require('./errors/NotFoundError');
const handleError = require('./middlewares/handleError');

const usersRout = require('./routes/users');
const cardsRout = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);
app.use(requestLogger);
app.use(cors({
  origin: [
    'http://domainname.helga.nomoreparties.sbs',
    'https://domainname.helga.nomoreparties.sbs',
    'http://localhost:3000'],
}));
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);

app.use(auth);
app.use('/users', usersRout);
app.use('/cards', cardsRout);
app.use(errorLogger);
app.use(errors());
app.use('/*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});
app.use(handleError);

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Ошибка на сервере ${PORT}`);
  }
});
