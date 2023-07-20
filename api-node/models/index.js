const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const Car = require("./car");

const car = Car(sequelize, Sequelize.DataTypes);

const db = {
  car,
  sequelize,
};

module.exports = db;
