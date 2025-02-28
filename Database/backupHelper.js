const { exec } = require("child_process");
const path = require("path");

const backupDB = () => {
  const backupPath = path.join(__dirname, "../backups", `backup_${Date.now()}.gz`);
  const command = `mongodump --uri="${process.env.MONGO_URI}" --archive=${backupPath} --gzip`;

  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error("Backup Error:", err);
    } else {
      console.log("Database Backup Successful:", backupPath);
    }
  });
};

module.exports = { backupDB };
