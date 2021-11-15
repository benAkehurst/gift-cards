const card = require("../models/card.model");

const GetCards = async (userId) => {
  const allCards = await card.find({
    _id: {
      $in: userId,
    },
  });
  return allCards;
};

module.exports = {
  GetCards,
};
