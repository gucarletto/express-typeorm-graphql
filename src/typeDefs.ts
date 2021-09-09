// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getUser(id: Int!): User
  }
  type Mutation {
    addUser(email: String!, password: String!, name: String!): Boolean!
  }
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
  }
`;