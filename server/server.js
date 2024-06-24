import express from 'express';

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authrouter');

const PORT = process.env.PORT || 5000;

const app = express();
// we need to add socket.io
app.use(express.json());
app.use(cookieParser());

// Connection to local mongodb
const dbURI = 'mongodb://localhost:27017/wisper';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

// some routes
app.use('/', authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
