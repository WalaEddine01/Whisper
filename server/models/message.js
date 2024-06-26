import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' },
}, { collection: 'messages' });

const Message = mongoose.model('Message', messageSchema);

export { Message, messageSchema };
