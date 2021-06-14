const express = require('express');
const app = express();
const PORT = 3000;
// const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cors()); 

const userRouter = require('./routes/userRouter');

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

//! TODO: ADD CATCH ROUTE FOR NON-SPECIFIED ROUTES
//! TODO: ADD ERROR HANDLER

module.exports = app;
