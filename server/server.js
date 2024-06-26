import express from 'express';
// import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import router from './routes/index';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './api/schemas';
import { resolvers } from './api/resolvers';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Correctly start the ApolloServer and apply middleware
server.start().then(() => {
  server.applyMiddleware({ app });

  app.use(express.json());
  app.use(cookieParser());
  app.use('/', router);

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}${server.graphqlPath}`);
  });
}).catch(error => console.error(`Error starting ApolloServer: ${error.message}`));