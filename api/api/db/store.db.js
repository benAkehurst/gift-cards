const store = require('../models/store.model');

const AddUserToStore = async (userId, storeId) => {
  const storeToUpdate = await store.findById(storeId);
  storeToUpdate.usersRef.push(userId);
  await storeToUpdate.save();
  return storeToUpdate;
};

module.exports = {
  AddUserToStore,
};
