const { exec } = require("child_process");

exports.backupDB = () => {
  const command = `mongodump --uri="${process.env.MONGO_URI}" --out=./backups/$(date +%Y-%m-%d)`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) console.error("Backup Failed", error);
    else console.log("Backup Successful", stdout);
  });
};
