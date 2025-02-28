const mongoose = require("mongoose");

exports.watchCollection = (Model) => {
  const changeStream = Model.watch();
  changeStream.on("change", (change) => {
    console.log("Database Change Detected:", change);
  });
};
