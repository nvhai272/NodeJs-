const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_database', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});


// sequelize.authenticate(()=>{
//     console.log('Connection has been established successfully.');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch (err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;

