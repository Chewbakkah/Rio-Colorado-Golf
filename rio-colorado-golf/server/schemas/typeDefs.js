const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    role: String
    membershipDate: String
  }
  type Pricing {
    _id: ID
    service: String
    price: String
    priceTimeFrame: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(email: String!): User
    services: [Pricing]
    servicesByTime(timeFrame: String!): Pricing
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      role: String
    ): Auth
    updateUser(
      _id: ID!
      firstName: String
      lastName: String
      email: String
      password: String
      role: String
    ): User
    deleteUser(_id: ID!): User
    addService(
      service: String!
      price: String!
      priceTimeFrame: String!
    ): Pricing
    updateService(
      _id: ID!
      service: String
      price: String
      priceTimeFrame: String
    ): Pricing
    deleteService(_id: ID!): Pricing
  }
`;

module.exports = typeDefs;
