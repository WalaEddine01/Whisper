import { User } from '../models/user';
import { Message } from '../models/message';
import { ChatRoom } from '../models/ChatRoom';

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({}).populate('chatRooms');
      return users.map((user) => ({
        ...user._doc,
        id: user._id.toString(),
        createdAt: user.createdAt.toISOString(),
      }));
    },
    user: async (_, { id }) => {
      const user = await User.findById(id).populate('chatRooms');
      return {
        ...user._doc,
        id: user._id.toString(),
        createdAt: user.createdAt.toISOString(),
      };
    },
    messages: async () => {
      const messages = await Message.find({}).populate('sender chatRoom');
      return messages.map((message) => ({
        ...message._doc,
        id: message._id.toString(),
        createdAt: message.createdAt.toISOString(),
      }));
    },
    message: async (_, { id }) => {
      const message = await Message.findById(id).populate('sender chatRoom');
      return {
        ...message._doc,
        id: message._id.toString(),
        createdAt: message.createdAt.toISOString(),
      };
    },
    chatRooms: async () => {
      const chatRooms = await ChatRoom.find({}).populate('users');
      return chatRooms.map((chatRoom) => ({
        ...chatRoom._doc,
        id: chatRoom._id.toString(),
        createdAt: chatRoom.createdAt.toISOString(),
      }));
    },
    chatRoom: async (_, { id }) => {
      const chatRoom = await ChatRoom.findById(id).populate('users');
      return {
        ...chatRoom._doc,
        id: chatRoom._id.toString(),
        createdAt: chatRoom.createdAt.toISOString(),
      };
    },
  },
  User: {
    chatRooms: async (parent) => {
      const chatRooms = await ChatRoom.find({ users: parent._id });
      return chatRooms.map((chatRoom) => ({
        ...chatRoom._doc,
        id: chatRoom._id.toString(),
        createdAt: chatRoom.createdAt.toISOString(),
      }));
    },
  },
  Message: {
    sender: async (parent) => {
      const user = await User.findById(parent.sender);
      return {
        ...user._doc,
        id: user._id.toString(),
        createdAt: user.createdAt.toISOString(),
      };
    },
    chatRoom: async (parent) => {
      const chatRoom = await ChatRoom.findById(parent.chatRoom);
      return {
        ...chatRoom._doc,
        id: chatRoom._id.toString(),
        createdAt: chatRoom.createdAt.toISOString(),
      };
    },
  },
  ChatRoom: {
    users: async (parent) => {
      const users = await User.find({ _id: { $in: parent.users } });
      return users.map((user) => ({
        ...user._doc,
        id: user._id.toString(),
        createdAt: user.createdAt.toISOString(),
      }));
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
        createdAt: new Date().toISOString(),
      });
      await chatRoom.save();
      return {
        ...chatRoom._doc,
        id: chatRoom._id.toString(),
      };
    },
    createMessage: async (_, { senderId, content, chatRoomId }) => {
      const message = new Message({
        sender: senderId,
        content,
        chatRoom: chatRoomId,
        createdAt: new Date().toISOString(),
      });
      await message.save();
      return {
        ...message._doc,
        id: message._id.toString(),
      };
    },
  },
};

export { resolvers };
