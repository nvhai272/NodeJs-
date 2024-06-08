const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Department = sequelize.define('Department', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'departments',
    timestamps: false
});

module.exports = Department;