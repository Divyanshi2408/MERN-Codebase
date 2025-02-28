exports.getTenantModel = (tenantId, modelName, schema) => {
    const connection = mongoose.createConnection(`mongodb://localhost:27017/${tenantId}`);
    return connection.model(modelName, schema);
  };
  