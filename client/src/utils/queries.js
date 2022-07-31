import { gql } from '@apollo/client';

export const GET_ALL_SHOES = gql`
  query GetAllShoes {
    getAllShoes {
      _id
      model
      image
      price
    }
  }
`;

export const GET_WOMEN_SHOES = gql`
  query GetWomenShoes {
    getWomenShoes {
      _id
      model
      image
      price
    }
  }
`;

export const GET_MEN_SHOES = gql`
  query GetMenShoes {
    getMenShoes {
      _id
      model
      image
      price
    }
  }
`;

export const GET_FEATURED = gql`
  query GetFeatured {
    getFeatured {
      _id
      model
      image
      price
    }
  }
`;

export const GET_DEALS = gql`
  query GetDeals {
    getDeals {
      _id
      model
      image
      price
    }
  }
`;

export const GET_SHOES_BY_ID = gql`
  query GetShoesById($id: ID!) {
    getShoesById(_id: $id) {
      _id
      model
      description
      image
      stock {
        size
        stock
      }
      gender
      price
      featured
      deal
    }
  }
`;

export const GET_NUMBER_PURCHASES = gql`
  query GetNumberPurchases {
    getNumberPurchases
  }
`;

export const GET_ALL_PURCHASES = gql`
  query GetAllPurchases {
    getAllPurchases {
      item
      size
    }
  }
`;
