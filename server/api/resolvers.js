import { User } from '../models/user';
import { Message } from '../models/message';
import { ChatRoom } from '../models/ChatRoom';

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({}).populate('chatRooms');
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findById(id).populate('chatRooms');
      return user;
    },
    messages: async () => {
      const messages = await Message.find({}).populate('sender chatRoom');
      return messages;
    },
    message: async (_, { id }) => {
      const message = await Message.findById(id).populate('sender chatRoom');
      return message;
    },
    chatRooms: async () => {
      const chatRooms = await ChatRoom.find({}).populate('users');
      return chatRooms;
    },
    chatRoom: async (_, { id }) => {
      const chatRoom = await ChatRoom.findById(id).populate('users');
      return chatRoom;
    },
  },
  User: {
    chatRooms: async (parent) => {
      const chatRooms = await ChatRoom.find({ users: parent._id });
      return chatRooms;
    },
  },
  Message: {
    sender: async (parent) => {
      const user = await User.findById(parent.sender);
      return user;
    },
    chatRoom: async (parent) => {
      const chatRoom = await ChatRoom.findById(parent.chatRoom);
      return chatRoom;
    },
  },
  ChatRoom: {
    users: async (parent) => {
      const users = await User.find({ _id: { $in: parent.users } });
      return users;
    },
  },
  Mutation: {
    createChatRoom: async (_, { type, userIds }) => {
      const users = await User.find({ _id: { $in: userIds } });
      if (type === 'one-to-one' && users.length !== 2) {
        throw new Error('One-to-one chat rooms must have exactly two users');
      }
      const chatRoom = new ChatRoom({
        type,
        users,
      });
      return await chatRoom.save();
    },
    createMessage: async (_, { senderId, content, chatRoomId }) => {
      const message = new Message({
        sender: senderId,
        content,
        chatRoom: chatRoomId,
      });
      return await message.save();
    },
  },
};

export { resolvers };
