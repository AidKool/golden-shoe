const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockSchema = new Schema({
  size: {
    type: String,
    enum: [
      '3',
      '3.5',
      '4',
      '4.5',
      '5',
      '5.5',
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
    ],
    default: '3',
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
});

const shoeSchema = new Schema({
  model: {
    type: String,
    required: true,
  },

  stock: {
    type: [stockSchema],
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

  deal: {
    type: Boolean,
    default: false,
  },
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
