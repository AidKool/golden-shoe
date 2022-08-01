import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
  mutation AddToCart($id: ID!, $size: String!) {
    addToCart(_id: $id, size: $size)
  }
`;

export const UPDATE_PURCHASE = gql`
  mutation UpdatePurchase($id: ID!, $units: Int!, $size: String!) {
    updatePurchase(_id: $id, units: $units, size: $size)
  }
`;

export const CHECKOUT = gql`
  mutation Checkout {
    checkout
  }
`;
