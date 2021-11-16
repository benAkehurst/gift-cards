const user = require('../models/user.model');

const AddNewCardToUser = async (userId, cardId) => {
  const userToUpdate = await user.findById(userId);
  userToUpdate.cards.push(cardId);
  await userToUpdate.save();
  return userToUpdate;
};

module.exports = {
  AddNewCardToUser,
};
