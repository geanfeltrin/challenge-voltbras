import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'
import { createContext } from './context'
import PlanetAPI from './api/planetApi'
import typeDefs from './schema/index'

new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
  dataSources: () => {
    return {
      planetsApi: new PlanetAPI(),
    }
  },
}).listen({ port: 4000 }, () =>
  console.log(`Server ready at: http://localhost:4000`),
)
