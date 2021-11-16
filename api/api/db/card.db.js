const card = require('../models/card.model');
const store = require('../models/store.model');

const GetCards = async (userId) => {
  const allCards = await card.find({
    _id: {
      $in: userId,
    },
  });
  return allCards;
};

const GatherCardData = async (cardId) => {
  const cardData = await card.findById(cardId);
  const storeData = await store.findById(cardData.storeRef);
  const storeObj = {
    _id: storeData._id,
    name: storeData.storeName,
    uniqueStoreId: storeData.uniqueStoreId,
    storeDetails: storeData.storeDetails,
  };
  return { cardData, storeObj };
};

module.exports = {
  GetCards,
  GatherCardData,
};
