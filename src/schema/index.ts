import { gql } from 'apollo-server';

const typeDefs = gql`
  type Planet {
    id: Int
    name: String
    hasStation: Boolean
    mass: Float
  }

  input installStation {
    "The name of the planet that you want to install station"
    name: String!
  }

  type Station {
    id: Int
    name: String!
  }

  type Mutation {
    installStation(data: installStation!): Station
  }

  type Query {
    suitablePlanets(page: Int): [Planet]
  }
`;

export default typeDefs;
