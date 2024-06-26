import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './models/user'; // Adjust the import path if necessary
import { Message } from './models/message'; // Adjust the import path if necessary
import { ChatRoom } from './models/ChatRoom'; // Adjust the import path if necessary

dotenv.config();

const { DB } = process.env;
const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || 'localhost';

const url = `mongodb://${HOST}:${PORT}/${DB}`;
console.log(url);

mongoose.connect(url)
  .then(() => {
    console.log(`Connected to ${DB} database`);

    insertUser();
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

async function insertUser() {
  try {
    const user1 = new User({
      username: 'john_d',
      email: 'john@example.com',
      password: 'securepassword123',
    });

    const user2 = new User({
      username: 'jane_do',
      email: 'jane@example.com',
      password: 'securepassword456',
    });

    const savedUser1 = await user1.save();
    const savedUser2 = await user2.save();
    console.log('Users inserted:', savedUser1, savedUser2);


    const chat = new ChatRoom({
      type: 'one-to-one',
      users: [savedUser1._id, savedUser2._id],
    });

    const savedChat = await chat.save();
    console.log('Chat created:', savedChat);

    // Create messages in the chat
    const message1 = new Message({
      sender: savedUser1._id,
      content: 'Hello Jane!',
      chatRoom: savedChat._id,
    });

    const message2 = new Message({
      sender: savedUser2._id,
      content: 'Hello John!',
      chatRoom: savedChat._id,
    });

    const savedMessage1 = await message1.save();
    const savedMessage2 = await message2.save();
    console.log('Messages inserted:', savedMessage1, savedMessage2);
  } catch (error) {
    console.error('Error:', error);
  }
}
