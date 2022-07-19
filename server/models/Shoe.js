const mongoose = require('mongoose');

const { Schema } = mongoose;

const shoeSchema = new Schema({
  model: {
    type: String,
    required: true,
  },

  stock: {
    type: Schema.Types.ObjectId,
    ref: 'Stock',
  },

  colour: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ['F', 'M'],
    default: 'F',
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  featured: {
    type: Boolean,
    default: false,
  },

  latest: {
    type: Boolean,
    default: false,
  },

  deal: {
    type: Boolean,
    default: false,
  },
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
