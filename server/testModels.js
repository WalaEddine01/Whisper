import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user';
import Message from './models/message';
import ChatRoom from './models/ChatRoom';

dotenv.config();

const { DB } = process.env;
const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || 'localhost';

const url = `mongodb://${HOST}:${PORT}/${DB}`;

mongoose.connect(url).then(() => {
  console.log(`Connected to ${DB} database`);

  async function run() {
    try {
      const user1 = new User({
        username: 'alice',
        email: 'alice@example.com',
        password: 'securepassword',
      });
      const user2 = new User({
        username: 'bob',
        email: 'bob@example.com',
        password: 'securepassword',
      });

      const savedUser1 = await user1.save();
      const savedUser2 = await user2.save();

      // Create a one-to-one chat room
      const oneToOneChatRoom = new ChatRoom({
        type: 'one-to-one',
        users: [savedUser1._id, savedUser2._id],
      });
      const savedChatRoom = await oneToOneChatRoom.save();

      const message1 = new Message({
        sender: savedUser1._id,
        content: 'Hello Bob!',
        chatRoom: savedChatRoom._id,
      });
      const savedMessage = await message1.save();

      console.log('Message sent:', savedMessage);
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
