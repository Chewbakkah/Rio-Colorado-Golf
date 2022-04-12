const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    role: String
    membershipDate: Date
  }
  type Pricing {
    service: String
    price: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
      users: [User]
      user:(email: String!): User
      services: [Pricing]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
