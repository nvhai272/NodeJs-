const {Sequelize}=require('sequelize');
// Create a connection to the MySQL database

const sequelize = new Sequelize('my_database', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
.then(()=> {
    console.log('Connection has been established successfully.');})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
