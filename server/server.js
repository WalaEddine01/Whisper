import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers } from './api/resolvers';
import router from './routes/index';
import { typeDefs } from './api/schemas';

const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => server.applyMiddleware({ app }));

app.use(express.json());
app.use('/', router);

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
  console.log('A user connected = ', socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
