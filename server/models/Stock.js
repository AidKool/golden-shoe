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

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
