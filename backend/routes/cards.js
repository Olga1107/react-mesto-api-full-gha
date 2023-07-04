const cardsRout = require('express').Router();
const { validationCreateCard, validationCardId } = require('../middlewares/validations');
const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards');

cardsRout.get('/', getCards);
cardsRout.post('/', validationCreateCard, createCard);
cardsRout.delete('/:cardId', validationCardId, deleteCard);
cardsRout.put('/:cardId/likes', validationCardId, putLike);
cardsRout.delete('/:cardId/likes', validationCardId, deleteLike);

module.exports = cardsRout;
