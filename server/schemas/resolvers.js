const { Shoe, Purchase } = require('../models');

const resolvers = {
  Query: {
    getAllShoes: async () => {
      try {
        const shoes = await Shoe.find().populate(['stock']);
        return shoes;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getWomenShoes: async () => {
      try {
        const shoes = await Shoe.find({
          gender: 'F',
        }).populate(['stock']);
        return shoes;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getMenShoes: async (_, __, ___) => {
      try {
        const shoes = await Shoe.find({
          gender: 'M',
        }).populate(['stock']);
        return shoes;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getFeatured: async (_, __, ___) => {
      try {
        const shoes = await Shoe.find({
          featured: true,
        }).populate(['stock']);
        return shoes;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getDeals: async (_, __, ___) => {
      try {
        const shoes = await Shoe.find({
          deal: true,
        }).populate(['stock']);
        return shoes;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getShoesById: async (_, { _id }) => {
      try {
        const shoe = await Shoe.findById(_id).populate({
          path: 'stock',
          model: 'Stock',
        });
        return shoe;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getAllPurchases: async () => {
      try {
        return await Purchase.find();
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getNumberPurchases: async () => {
      try {
        return Purchase.count();
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    addToCart: async (_, { _id, size }) => {
      try {
        const purchase = await Purchase.create({ item: _id, size });
        return purchase ? true : false;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
