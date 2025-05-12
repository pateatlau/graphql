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
