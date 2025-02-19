const Transaction = require("./transactionModel");

exports.cleanupOldTransactions = async () => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  await Transaction.deleteMany({ createdAt: { $lt: oneYearAgo } });
  console.log("Old transactions deleted successfully");
};
