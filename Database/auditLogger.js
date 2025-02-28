const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  collectionName: String,
  documentId: mongoose.Schema.Types.ObjectId,
  operation: String,
  changes: Object,
  timestamp: { type: Date, default: Date.now },
});

const AuditLog = mongoose.model("AuditLog", auditSchema);

exports.logAudit = async (collectionName, documentId, operation, changes) => {
  await AuditLog.create({ collectionName, documentId, operation, changes });
};
