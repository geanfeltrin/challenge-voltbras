import { config } from 'dotenv';
config();

import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schema/index';
import PlanetAPI from './api/planetApi';
import { createContext } from './context/db';

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      planetAPI: new PlanetAPI(),
    };
  },
  context: createContext,
});

server.listen({ port: 4000 }, () => {
  console.log(`Server ready at: http://localhost:4000`);
});
