module.exports = {
  /**
   * Trigger a backup at 04:00 every day
   */
  "0 4 * * *": async () => {
    console.log("Starting backup from cron...");
    const backupID = Date.now().toString();

    await strapi.plugins["backup-restore"].services["backup-tools"].runBackup(
      backupID,
      false, // Tells if it's a manual backup, well it's not
      true, // Backup database
      true // Backup files
    );
    console.log(`Backup ${backupID} finished`);
  },
};
