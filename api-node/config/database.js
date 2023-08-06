const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: "3500",
  database: "postgres",
  username: "pguser",
  password: "pgpassword",
});

module.exports = sequelize;
