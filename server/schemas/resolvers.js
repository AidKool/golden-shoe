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
        const purchases = await Purchase.find();
        const purchaseResponse = [];

        for await (const purchase of purchases) {
          const { item, size, units } = purchase;
          const shoes = await Shoe.findById(item);
          shoes.stock = shoes.stock.filter((item) => {
            return item.size === purchase.size;
          });
          purchaseResponse.push({ item: shoes, size, units });
        }
        return purchaseResponse;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getNumberPurchases: async () => {
      try {
        const purchases = await Purchase.find();
        const total = purchases.reduce((acc, current) => {
          return acc + current.units;
        }, 0);
        return total;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    addToCart: async (_, { _id, size }) => {
      try {
        const purchase = await Purchase.findOne({ item: _id, size: size });
        if (purchase) {
          purchase.units += 1;
          purchase.save();
        } else {
          Purchase.create({ item: _id, size });
        }
        return true;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    updatePurchase: async (_, { _id, size, units }) => {
      try {
        const purchase = await Purchase.findOneAndUpdate(
          { item: _id, size },
          { units: units }
        );
        return purchase ? true : false;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
