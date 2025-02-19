exports.paginate = async (Model, page = 1, limit = 10, filters = {}) => {
    const skip = (page - 1) * limit;
    const data = await Model.find(filters).skip(skip).limit(limit);
    const total = await Model.countDocuments(filters);
  
    return {
      total,
      page,
      pages: Math.ceil(total / limit),
      data,
    };
  };
  