exports.paginate = async (Model, page = 1, limit = 10, filter = {}, projection = {}) => {
    const data = await Model.find(filter, projection)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();
    
    const totalCount = await Model.countDocuments(filter);
  
    return {
      data,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalCount,
    };
  };
  