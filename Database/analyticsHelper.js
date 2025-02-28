exports.getCollectionStats = async (Model) => {
    const count = await Model.countDocuments();
    const lastUpdated = await Model.findOne().sort({ updatedAt: -1 }).select("updatedAt");
  
    return {
      totalDocuments: count,
      lastUpdated: lastUpdated ? lastUpdated.updatedAt : null,
    };
  };
  