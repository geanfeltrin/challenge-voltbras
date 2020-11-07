import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schema/index';
import PlanetAPI from './api/planetApi';

dotenv.config();

const app = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      planetAPI: new PlanetAPI(),
    };
  },
});

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at: http://localhost:4000`),
);
