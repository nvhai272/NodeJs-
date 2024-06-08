const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// define entity and table names for the database
const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 45]
        }
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    }
});

module.exports = Book;