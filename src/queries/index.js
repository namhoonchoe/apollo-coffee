import { gql } from "apollo-boost";

export const getCoffees = gql`
  query {
    coffees {
      name
      description
      id
    }
  }
`;

export const getOrigins = gql`
  query {
    origins {
      name
      description
      id
    }
  }
`;

export const getMethods = gql`
  query {
    brewMethods {
      name
      description
      id
    }
  }
`;
