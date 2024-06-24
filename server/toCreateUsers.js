import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './models/user';

dotenv.config();

const DB = process.env.DB;
const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || 'localhost';

const url = `mongodb://${HOST}:${PORT}/${DB}`;
console.log(url);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log(`Connected to ${DB} database`);
    // Insert a user after successful connection
    insertUser();
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

async function insertUser() {
  try {
    const newUser = new User({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'securepassword123'
    });

    const savedUser = await newUser.save();
    console.log('User inserted:', savedUser);
  } catch (error) {
    console.error('Error inserting user:', error);
  }
}

