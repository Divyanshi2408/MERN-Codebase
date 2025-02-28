const mongoose = require("mongoose");

exports.softDelete = async (Model, id) => {
  return await Model.findByIdAndUpdate(id, { deletedAt: new Date() });
};

exports.restore = async (Model, id) => {
  return await Model.findByIdAndUpdate(id, { deletedAt: null });
};
