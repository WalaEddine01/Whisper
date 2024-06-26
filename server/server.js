import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import router from './routes/index';
import { typeDefs } from './api/schemas';
import { resolvers } from './api/resolvers';

const app = express();
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
