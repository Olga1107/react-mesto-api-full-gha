const usersRout = require('express').Router();
const { validationUserId, validationUpdateUser, validationUpdateAvatar } = require('../middlewares/validations');
const {
  getUsers,
  getUser,
  updateUser,
  updateUserAvatar,
  getCurrentUser,
} = require('../controllers/users');

usersRout.get('/', getUsers);
usersRout.get('/me', getCurrentUser);
usersRout.get('/:userId', validationUserId, getUser);
usersRout.patch('/me', validationUpdateUser, updateUser);
usersRout.patch('/me/avatar', validationUpdateAvatar, updateUserAvatar);

module.exports = usersRout;
