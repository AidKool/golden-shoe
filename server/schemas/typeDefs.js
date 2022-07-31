const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shoe {
    _id: ID
    model: String
    description: String
    image: String
    stock: [Stock]
    gender: String
    price: Int
    featured: Boolean
    deal: Boolean
  }

  type Stock {
    _id: ID
    size: String
    stock: Int
  }

  type Purchase {
    item: String
    size: String
  }

  type Cart {
    items: [Shoe]
  }

  type Query {
    getAllShoes: [Shoe]
    getWomenShoes: [Shoe]
    getMenShoes: [Shoe]
    getFeatured: [Shoe]
    getDeals: [Shoe]
    getShoesById(_id: ID!): Shoe
    getNumberPurchases: Int
    getAllPurchases: [Purchase]
  }

  type Mutation {
    addToCart(_id: ID!, size: String!): Boolean
  }
`;

module.exports = typeDefs;
