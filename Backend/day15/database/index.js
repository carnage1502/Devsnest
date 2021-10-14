const { Sequelize } = require("sequelize");
//carnage
const sequelize = new Sequelize("postgres", "postgres", "2020", {
	host: "localhost",
	dialect: "postgres",
});

sequelize.sync();

(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection established with DB!");
	} catch (err) {
		console.log("Unable to connect to DB!");
	}
})();

module.exports = sequelize;