const db = require('../models/usersModels'); //we don't know what this will be yet, update later
//should we connect to the server in this file as well? follow up on this

const userController = {};

userController.createUser = async (req, res, next) => {
  const {
    name,
    username,
    password_digest,
    email,
    gender,
    birthdate,
    skill_level,
    bio,
  } = req.body;

  const createUserQuery = `
    INSERT INTO users (name, username, password_digest, email, gender, birthdate, skill_level, bio)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `;
  const params = [name, username, password_digest, email, gender, birthdate, skill_level, bio];

  //save our join or selection into a variable, inserting in our case
  try {
    //how should we create a new user, is it a class we set up somewhere?
    const user = await db.query(createUserQuery, params);
    // db.query(createUserQuery, params, function (ar1, arg2) {
    //   console.log(ar1);
    //   console.log(arg2);
    // });
    console.log(user);
    res.locals.user = user.rows[0];
    return next();
    //what should we be sending back to the front end? this will be parsed with json in the router file
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
  select users.*, instruments.instrument_name as instruments, genre.genre_name as genres from users
  INNER JOIN users_instruments on users._id = users_instruments.user_id
  INNER JOIN instruments on instruments._id = users_instruments.instrument_id
  INNER JOIN users_genres on users._id = users_genres.user_id
  INNER JOIN genre on genre._id = users_genres.genre_id
    `;



  // This is getting a table showing all the users and the instruments and genres they like
  // select users.*, instruments.instrument_name as instruments, genre.genre_name as genres  from users inner join users_instruments on users._id = users_instruments.user_id inner join instruments on instruments._id =
  //   users_instruments.instrument_id INNER JOIN users_genres on users._id = users_genres.user_id INNER JOIN genre on genre._id = users_genres.genre_id

  // select users.*, instruments.instrument_name as instruments, genre.genre_name as genres  from users inner join users_instruments on users._id = users_instruments.user_id inner join instruments on instruments._id =
  //   users_instruments.instrument_id INNER JOIN users_genres on users._id = users_genres.user_id INNER JOIN genre on genre._id = users_genres.genre_id
  try {
    //access Users via sql query
    const users = await db.query(viewUsers);
    console.log(users.rows);
    res.locals.users = users.rows; // an array of user objects
    return next();
  } catch (error) {
    return next({
      error: `userController.viewUsers; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

userController.findUser = async (req, res, next) => {
  try {
    const findUser = //some selection
      res.locals.user = await db.query(findUser); //.rows[0]; //let's look in the user router file now and 
    return next();
  } catch (error) {
    return next({
      error: `userController.findUser; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

//user is the primary key 
//the foreign key connects the user to the instrument and user to the genre
//can search for an instrument and a genre

// userController.matchUser = (req, res, err) {

// }


userController.updateUser = async (req, res, next) => {
  try {
    const updateUser = //some selection
      // res.locals.message = await db.query(updateUser);
      res.locals.user = await db.query(updateUser);
  } catch (error) {
    return next({
      error: `userController.updateUser; ERROR: ${error} `,
      message: 'Error occured in controllers/userController.js'
    });
  }
};

userController.deleteUser = async (req, res, next) => {
  try {
    const deleteUser = //some selection
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
