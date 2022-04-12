const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Pricing {
    service: String
    price: String
    priceTimeFrame: String
  }

  type Query  {
      services: [Pricing]
  }
`;

module.exports = typeDefs;
