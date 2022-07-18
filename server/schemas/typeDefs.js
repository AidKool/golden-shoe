const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shoe {
    _id: ID
    model: String
    colour: String
    image: String
    stock: Stock
    gender: String
    price: Int
    featured: Boolean
    latest: Boolean
    deal: Boolean
  }

  type Stock {
    _id: ID
    size: String
    stock: Int
  }

  type Query {
    getWomenShoes: [Shoe]
    getMenShoes: [Shoe]
    getFeatured: [Shoe]
    getLatest: [Shoe]
    getDeals: [Shoe]
    getShoesById(_id: ID!): Shoe
  }
`;

module.exports = typeDefs;
