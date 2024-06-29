import mongoose from 'mongoose';

<<<<<<< HEAD
const chatRoomSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['one-to-one', 'group'], required: true },
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'chatRooms' },
);
=======
const chatRoomSchema = new mongoose.Schema({
  type: { type: String, enum: ['one-to-one', 'group'], required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  createdAt: { type: Date, default: Date.now },
}, { collection: 'chatRooms' });
>>>>>>> 90d12819c6df795a34328ba41ab10cd82ffbb605

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

export { ChatRoom, chatRoomSchema };
