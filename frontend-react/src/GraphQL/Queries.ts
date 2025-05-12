import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      firstName
      lastName
      email
      gender
      ipAddress
      password
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String!
    $ipAddress: String!
    $password: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
      ipAddress: $ipAddress
      password: $password
    ) {
      id
      firstName
      lastName
      email
      gender
      ipAddress
      password
    }
  }
`;
