const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardModel = new Schema(
  {
    current_stamps: {
      type: Number,
      default: 0,
    },
    transactions: {
      type: Array,
      default: [],
    },
    completed_cards: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardModel);
