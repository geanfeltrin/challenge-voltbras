import { gql } from 'apollo-server';
// acho que podia ser um arquivo schema.ts mesmo ao invés de ser uma pasta,
// mas ta bem massa a definição do teu schema!
const typeDefs = gql`
  type Planet {
    id: Int # poderia ser obrigatório
    name: String # poderia ser obrigatório
    hasStation: Boolean # poderia ser obrigatório
    mass: Float # poderia ser obrigatório
  }

  input installStation {
    "The name of the planet that you want to install station"
    name: String!
  }

  type Station {
    id: Int # poderia ser obrigatório
    name: String!
  }

  type Mutation {
    installStation(data: installStation!): Station # poderia ser obrigatório o retorno
  }

  type Query {
    suitablePlanets(page: Int): [Planet] # poderia ser obrigatório o retorno
  }
`;

export default typeDefs;
