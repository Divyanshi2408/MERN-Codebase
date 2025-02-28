🚀 How to Use These Files?
1) Connect to MongoDB (dbConnect.js)
const connectDB = require("./database/dbConnect");
connectDB();

2) Use Models (index.js)
const { User, Property, Transaction } = require("./database");
const users = await User.find();

3) Query with queryHelpers.js
const { findById } = require("./database/queryHelpers");
const user = await findById(User, "userId123");

4) Implement Pagination
const { paginate } = require("./database/paginationHelper");
const properties = await paginate(Property, 1, 5, { location: "New York" });

5) Backup Database
const { backupDB } = require("./database/dbBackup");
backupDB();

6) Validate Data Before Saving
const { validateUser } = require("./database/validationHelper");

const { error } = validateUser({ name: "John", email: "john@example.com", password: "123456" });

if (error) {
  console.error("Validation Error:", error.details);
} else {
  console.log("Data is valid!");
}

7) Soft Delete a User
const { softDelete, restore } = require("./database/softDeleteHelper");
await softDelete(User, "userId123"); // Soft delete
await restore(User, "userId123"); // Restore user

8) Log Changes for Auditing
const { logAudit } = require("./database/auditLogger");
await logAudit("User", "userId123", "UPDATE", { name: "John Doe" });

9) Get Database Analytics
const { getCollectionStats } = require("./database/analyticsHelper");
const stats = await getCollectionStats(User);
console.log("User Collection Stats:", stats);

10) Implement Multi-Tenancy
const { getTenantModel } = require("./database/multiTenantHelper");
const TenantUser = getTenantModel("tenant1", "User", userSchema);
const users = await TenantUser.find();

11) Improve Connection Pooling (dbPool.js)
const mongoose = require("./database/dbPool"); // Use in server.js

12) Paginate Large Data (queryOptimizer.js)
const { paginate } = require("./database/queryOptimizer");
const users = await paginate(User, 1, 10, { role: "admin" }, { name: 1, email: 1 });

13) Run Automatic Backups (backupHelper.js)
const { backupDB } = require("./database/backupHelper");
backupDB(); // Run this periodically using a cron job

14) Implement Role-Based Access (rbacHelper.js)
const { checkPermission } = require("./database/rbacHelper");
checkPermission(user, "admin"); // Throws error if user is not an admin

15) Monitor Database Events (dbEventListener.js)
require("./database/dbEventListener");