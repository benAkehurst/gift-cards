const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardModel = new Schema(
  {
    currentStamps: {
      type: Number,
      default: 0,
    },
    transactions: {
      type: Array,
      default: [],
    },
    completedCards: {
      type: Array,
      default: [],
    },
    storeRef: {
      type: String,
    },
    userRef: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Card', CardModel);
