const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//! TODO: Will there ever be an error at the end of all the middleware?
//! Check if try/catches in this file are actually needed. 

// Get all users
router.get(
  '/',
  userController.viewUsers,
  (req, res, next) => {
    try {
      res.status(200).json({ users: res.locals.users });
    } catch (error) {
      next(error);
    }
  }
);

// Create a user
router.post(
  '/',
  userController.createUser,
  (req, res, next) => {
    try {
      res.status(200).json(res.locals.user);
    } catch (error) {
      next(error);
    }
  }
);

// Get one user
router.get(
  '/:id',
  userController.findUser,
  (req, res, next) => {
    try {
      res.status(200).json(res.locals.user);
    } catch (error) {
      next(error);
    }
  }
);

// Delete a user
router.delete(
  '/:id',
  userController.deleteUser,
  (req, res, next) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

// Update a user
router.patch(
  '/:id',
  userController.updateUser,
  (req, res, next) => {
    try {
      res.status(200).json(res.locals.user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
