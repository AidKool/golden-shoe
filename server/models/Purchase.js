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
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
