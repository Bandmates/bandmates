const express = require('express');
const app = express();
const PORT = 3000;
// const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cors()); 

const userRouter = require('./routes/userRouter');

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

//notes:
//we will need to create a connection to the sequel database in this file as well