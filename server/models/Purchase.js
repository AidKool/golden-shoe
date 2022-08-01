const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const purchaseSchema = new Schema({
  item: {
    type: Types.ObjectId,
    ref: 'Shoe',
  },
  size: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
