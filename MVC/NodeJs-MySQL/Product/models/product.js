const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

// Tạo bảng nếu chưa tồn tại
sequelize.sync()
  .then(() => {
    console.log('Bảng Product đã được tạo.');
  })
  .catch(err => {
    console.error('Không thể tạo bảng Product:', err);
  });

module.exports = Product;

