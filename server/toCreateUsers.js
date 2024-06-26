import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from "./models/user";
import { Message } from "./models/message";
import { ChatRoom } from "./models/ChatRoom";

dotenv.config();

const DB = process.env.DB;
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
      email: 'joh@exampl.com',
      password: 'securepassword123'
    });

    const user2 = new User({
      username: 'jane_do',
      email: 'jane@exampl.com',
      password: 'securepassword456'
    });

    const savedUser1 = await user1.save();
    const savedUser2 = await user2.save();
    console.log('Users inserted:', savedUser1, savedUser2);

    // Create a chat between the two users
    const chat = new ChatRoom({
      type: 'one-to-one',
      users: [savedUser1, savedUser2]
    });

    const savedChat = await chat.save();
    console.log('Chat created:', savedChat);

    // Create messages in the chat
    const message1 = new Message({
      sender: savedUser1,
      content: 'Hello Jane!',
      ChatRoom: savedChat
    });

    const message2 = new Message({
      sender: savedUser2,
      content: 'Hello JONE!',
      ChatRoom: savedChat
    });

    const savedMessage1 = await message1.save();
    const savedMessage2 = await message2.save();
    console.log('Messages inserted:', savedMessage1, savedMessage2);
  } catch (error) {
    console.error('Error:', error);
  }
}

