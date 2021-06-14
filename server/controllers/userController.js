const db = require('../models/usersModels');

const userController = {};

//! TODO: are we actually creating the user with this query?
//! There seems to be no change the users when running 
//! GET requests to /users
userController.createUser = async (req, res, next) => {
  const {
    name,
    username,
    password: password_digest,
    email,
    gender,
    birthdate,
    skill: skill_level,
    bio,
    location,
    genres,
    instruments,
  } = req.body;

  const createUserQuery = `
    INSERT INTO users (name, username, password_digest, email, gender, birthdate, skill_level, bio, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
  `;

  //! TODO: we are currently storing passwords directly into the DB. 
  //! We need to use Bcrypt to encrypt our users' passwords.
  const params = [
    name,
    username,
    password_digest,
    email,
    gender,
    birthdate,
    skill_level,
    bio,
    location
  ];

  try {
    const user = await db.query(createUserQuery, params);

    //! TODO: currently, when we create a user, we are not storing their
    //! instrument or genre information anywhere. We need to update
    //! the joins tables to save that information about a new user. 

    res.locals.user = user.rows[0];
    return next();
  } catch (error) {
    return next({
      error: `userController.createUser; ERROR: ${error} `,
      message: 'Error occured in conrollers/userController.js'
    });
  }
};

userController.viewUsers = async (req, res, next) => {
  // find all instruments and genres played and preferred by a specific user id in the intermediary tables
  const viewUsers = `
    SELECT users.*, instruments.instrument_name as instruments, genre.genre_name as genres FROM users
    INNER JOIN users_instruments ON users._id = users_instruments.user_id
    INNER JOIN instruments ON instruments._id = users_instruments.instrument_id
    INNER JOIN users_genres ON users._id = users_genres.user_id
    INNER JOIN genre ON genre._id = users_genres.genre_id
  `;

  //! TODO: currently, we are getting multiple entries per user.
  //! This is because of our joins table. We need to combine
  //! genre and instrument information so that users with
  //! many instruments and many genres don't appear multiple times.

  // This is getting a table showing all the users and the instruments and genres they like
  // select users.*, instruments.instrument_name as instruments, genre.genre_name as genres  from users inner join users_instruments on users._id = users_instruments.user_id inner join instruments on instruments._id =
  //   users_instruments.instrument_id INNER JOIN users_genres on users._id = users_genres.user_id INNER JOIN genre on genre._id = users_genres.genre_id

  // select users.*, instruments.instrument_name as instruments, genre.genre_name as genres  from users inner join users_instruments on users._id = users_instruments.user_id inner join instruments on instruments._id =
  //   users_instruments.instrument_id INNER JOIN users_genres on users._id = users_genres.user_id INNER JOIN genre on genre._id = users_genres.genre_id
  try {
    const users = await db.query(viewUsers);
    res.locals.users = users.rows;

    return next();
  } catch (error) {
    return next({
      error: `userController.viewUsers; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

//TODO: this middleware will find one user based on that user's ID. 
userController.findUser = async (req, res, next) => {
  try {
    const findUser; //some selection
    res.locals.user = await db.query(findUser); //.rows[0]; //let's look in the user router file now and 
    return next();
  } catch (error) {
    return next({
      error: `userController.findUser; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

//TODO: this middleware will find one user based on that user's ID,
// and update based on the body. 
userController.updateUser = async (req, res, next) => {
  try {
    const updateUser; //some selection
      // res.locals.message = await db.query(updateUser);
      res.locals.user = await db.query(updateUser);
  } catch (error) {
    return next({
      error: `userController.updateUser; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

//TODO: this middleware will find one user and delete them
// from the database. 
userController.deleteUser = async (req, res, next) => {
  try {
    const deleteUser; //some selection
    await db.query(deleteUser);
    res.locals.message = 'User has been deleted'; //.rows[0]; 
    return next();
  } catch (error) {
    return next({
      error: `userController.deleteUser; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

module.exports = userController;
