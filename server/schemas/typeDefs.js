const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Shoe {
    _id: ID
    model: String
    colour: String
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

  type Query {
    getAllShoes: [Shoe]
    getWomenShoes: [Shoe]
    getMenShoes: [Shoe]
    getFeatured: [Shoe]
    getDeals: [Shoe]
    getShoesById(_id: ID!): Shoe
  }
`;

module.exports = typeDefs;
