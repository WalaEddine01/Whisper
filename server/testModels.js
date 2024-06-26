import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './models/user';
import { Message } from './models/message';
import { ChatRoom } from './models/ChatRoom';

dotenv.config();

const { DB } = process.env;
const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || 'localhost';

const url = `mongodb://${HOST}:${PORT}/${DB}`;

mongoose.connect(url).then(() => {
  console.log(`Connected to ${DB} database`);

  async function run() {
    try {
      const users = await User.find({}).populate('chatRooms');
      console.log('Users:', users);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      mongoose.connection.close();
    }
  }

  run();
}).catch((err) => {
  console.error('Connection error:', err);
});
