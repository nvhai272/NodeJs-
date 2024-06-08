const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false, // Tắt các trường createdAt và updatedAt
  tableName: 'departments' // Tên bảng
});

sequelize.sync()
    .then(() => {
        console.log('Created table');
    })
    .catch(err => {
        console.error('No create', err);
    })

module.exports = Department;