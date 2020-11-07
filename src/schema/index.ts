import { gql } from 'apollo-server';

const typeDefs = gql`
  type Planet {
    id: Int
    name: String
    hasStation: Boolean
    mass: Float
  }

  input installStation {
    namePlanet: String!
    nameStation: String!
    mass: Float
  }

  type Station {
    id: Int
    namePlanet: String!
    nameStation: String!
    mass: Float
  }

  type Mutation {
    installStation(data: installStation!): Station
  }

  type Query {
    suitablePlanets(page: Int): [Planet]
  }
`;

export default typeDefs;
