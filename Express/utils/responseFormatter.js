const responseFormatter = (data, message = "Success", status = 200) => {
    return { status, message, data };
  };
  module.exports = responseFormatter;
  