import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import router from './routes/index';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './api/schemas';
import { resolvers } from './api/resolvers';

const PORT = process.env.PORT || 5000;
const app = express();

// Initialize ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start ApolloServer and apply middleware
server.start().then(() => {
  server.applyMiddleware({ app });

  // Middleware
  app.use(express.json());
  app.use(cookieParser());

  // Connection to local mongodb
  const dbURI = 'mongodb://localhost:27017/wisper';
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      // Listen on port 3000 when connected to MongoDB successfully
      app.listen(3000, () => {
        console.log(`MongoDB connected and server running on port 3000`);
      });
    })
    .catch((err) => console.log(err));

  // Routes
  app.use('/', router);

  // Listen on the ApolloServer port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}${server.graphqlPath}`);
  });
});