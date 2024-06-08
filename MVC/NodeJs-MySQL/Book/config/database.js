const { Sequelize } = require('sequelize');

// create connection to database MySQL
const sequelize = new Sequelize('my_database', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});

console.log('Attempting to connect to the database...');

// check connection database
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully!');
})
.catch(err => {
    console.error('Unable to connect to the database:', err.message);
});

module.exports = sequelize;
