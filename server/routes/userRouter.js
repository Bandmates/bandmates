const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/api/users',
  userController.viewUsers,
  (req, res, next) => {
    try {
      res.status(200).json({ users: res.locals.users });
    } catch (error) {
      next(error);
    }
  });

router.get('/api/users/:id',
  userController.findUser,
  (req, res, next) => {
    try {
      res.status(200).json(res.locals.user);
    } catch (error) {
      next(error);
    }
  });

router.post('/api/users',
  userController.createUser,
  (req, res, next) => {
    try {
      res.status(200).json(res.locals.user);
    } catch (error) {
      next(error);
    }
  });

router.delete('/api/users',
  userController.deleteUser,
  (req, res, next) => {
    try {
      res.status(200).json(res.locals.message);
    } catch (error) {
      next(error);
    }
  });


// router.put('/',
//   userController.updateUser,
//   (req, res, next) => {
//     try {

//     } catch (error) {

//     }
//   }
// );


//create a gloabal catch here? check other examples, but a global catch should be somewhere to catch all errors 

module.exports = router;
