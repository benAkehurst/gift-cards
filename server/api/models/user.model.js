const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    acceptedTerms: {
      type: Boolean,
    },
    createdOnDate: {
      type: String,
    },
    userUID: {
      type: String,
      required: false,
    },
    userActive: {
      type: Boolean,
      default: false,
    },
    userAcquisitionLocation: {
      type: String,
    },
    cards: {
      type: Array,
      default: [],
    },
    stores: {
      type: Array,
      default: [],
    },
    customerId: {
      type: String,
    },
    qrCode: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
