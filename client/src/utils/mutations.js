import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
  mutation AddToCart($id: ID!, $size: String!) {
    addToCart(_id: $id, size: $size)
  }
`;
