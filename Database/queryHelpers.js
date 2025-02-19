exports.findById = async (Model, id) => {
    return await Model.findById(id);
  };
  
  exports.findAll = async (Model, filters = {}) => {
    return await Model.find(filters);
  };
  
  exports.createOne = async (Model, data) => {
    return await Model.create(data);
  };
  