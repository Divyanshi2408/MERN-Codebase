exports.applyIndexes = async (Model, indexes) => {
    try {
      await Model.collection.createIndexes(indexes);
      console.log(`Indexes applied to ${Model.collection.name}:`, indexes);
    } catch (error) {
      console.error(`Error applying indexes: ${error.message}`);
    }
  };
  