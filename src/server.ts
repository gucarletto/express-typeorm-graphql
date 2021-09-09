import 'dotenv/config';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import express from 'express';

const startServer = async() => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await createConnection();

  const app = express();

  await server.start();
  server.applyMiddleware({ app })

  app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`));
};

startServer();