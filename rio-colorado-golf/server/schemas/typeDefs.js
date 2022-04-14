const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Pricing {
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
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
<<<<<<< HEAD

  type Query  {
      services: [Pricing]
=======
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(email: String!): User
    services: [Pricing]
    servicesByTime(priceTimeFrame: String!): Pricing
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
      firstName: String
      lastName: String
      email: String
      password: String
      role: String
    ): User
    deleteUser(email: String!): User
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
>>>>>>> dev
  }
`;

module.exports = typeDefs;
