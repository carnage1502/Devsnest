const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "Carnage", "123456789", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with DB");
  } catch (err) {
    console.error("Unable to connect to DB");
  }
})();

module.exports = sequelize;