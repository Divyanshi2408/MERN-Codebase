🚀 How to Use These Files?
1️⃣ Connect to MongoDB (dbConnect.js)
javascript
Copy
Edit
const connectDB = require("./database/dbConnect");
connectDB();
2️⃣ Use Models (index.js)
javascript
Copy
Edit
const { User, Property, Transaction } = require("./database");
const users = await User.find();
3️⃣ Query with queryHelpers.js
javascript
Copy
Edit
const { findById } = require("./database/queryHelpers");
const user = await findById(User, "userId123");
4️⃣ Implement Pagination
javascript
Copy
Edit
const { paginate } = require("./database/paginationHelper");
const properties = await paginate(Property, 1, 5, { location: "New York" });
5️⃣ Backup Database
javascript
Copy
Edit
const { backupDB } = require("./database/dbBackup");
backupDB();
