import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers } from './api/resolvers';
import router from './routes/index';
import { typeDefs } from './api/schemas';
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:8000',
    credentials: true,
  }),
  // cors(),
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => server.applyMiddleware({ app }));

app.use(express.json());
app.use('/', router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}${server.graphqlPath}`);
});

