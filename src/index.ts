import express from 'express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { ApolloServer } from 'apollo-server-express';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app, path: '/' });

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log(
    `🛸 Server ready at http://localhost:${4000}${server.graphqlPath}`
  );
});