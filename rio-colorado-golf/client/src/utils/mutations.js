import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
// WAS UPDATED ROLE REMOVED
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $role: String
  ) {
    updateUser(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      _id
      firstName
      lastName
      email
      role
      membershipDate
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      email
    }
  }
`;

export const ADD_SERVICE = gql`
  mutation addService(
    $service: String!
    $price: String!
    $priceTimeFrame: String!
  ) {
    addService(
      service: $service
      price: $price
      priceTimeFrame: $priceTimeFrame
    ) {
      _id
      service
      price
      priceTimeFrame
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation updateService(
    $id: ID!
    $service: String
    $price: String
    $priceTimeFrame: String
  ) {
    updateService(
      _id: $id
      service: $service
      price: $price
      priceTimeFrame: $priceTimeFrame
    ) {
      _id
      service
      price
      priceTimeFrame
    }
  }
`;

export const DELETE_SERVICE = gql`
  mutation deleteService($id: ID!) {
    deleteService(_id: $id) {
      _id
      service
    }
  }
`;
