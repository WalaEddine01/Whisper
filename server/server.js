import { ApolloServer } from 'apollo-server-express';
import { checkUser } from './middleware/authMiddleware';
import cookieParser from 'cookie-parser';
import express from 'express';
import { resolvers } from './api/resolvers';
import router from './routes/index';
import { typeDefs } from './api/schemas';
const path = require('path');

const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:8000',
    // origin: 'http://192.168.56.1:8000',
    credentials: true,
  }),
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => server.applyMiddleware({ app }));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser());
app.use(checkUser);
app.use('/', router);
app.use('/public', express.static(path.join(__dirname, 'public')));

const PORT = 5000;
const server2 = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}${server.graphqlPath}`);
});

const io = require('socket.io')(server2, {
  pingTimeout: 60000,
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log(`A user with socket ID: ${socket.id}`);

  socket.on('newUser', () => {
    io.emit('newUser');
    console.log('New user connected');
  });

  socket.on('joinChatRoom', (chatRoomId) => {
    socket.join(chatRoomId);
    console.log(`User ${socket.id} joined chat room ${chatRoomId}`);
    io.emit('RoomCreated', chatRoomId);
  });

  socket.on('sendMessage', (messageData) => {
    const { chatRoomId, message } = messageData;
    socket.to(chatRoomId).emit('receiveMessage', message);
    console.log(`Message sent to chat room ${chatRoomId}:`, message);
  });

  socket.on('typing', (chatRoomId, username) => {
    socket.to(chatRoomId).emit('userTyping', username);
  });

  socket.on('stoppedTyping', (chatRoomId, username) => {
    socket.to(chatRoomId).emit('userStoppedTyping', username);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

