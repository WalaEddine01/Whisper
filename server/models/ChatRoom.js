import mongoose from 'mongoose';

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
const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

export { ChatRoom, chatRoomSchema };
