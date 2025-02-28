const mongoose = require("mongoose");

exports.runTransaction = async (operations) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await operations(session);
    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
