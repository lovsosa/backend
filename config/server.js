module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "32a00a220c916908e0efca2b8117262f"),
    },
    watchIgnoreFiles: ["**/private/**"],
  },
});
