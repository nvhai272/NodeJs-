const sequelize = require('../config/database');

const {DataTypes} = require('sequelize');

const Department = require('./department');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.STRING
      },
      hire_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      job_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      department_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Department,
          key: 'id'
        }
      }
    }, {
        timestamps: false, 
        tableName: 'employees'
});

Employee.belongsTo(Department, {foreignKey: 'department_id',as:'department'});
Department.hasMany(Employee, {foreignKey: 'department_id',as:'employees'});

module.exports = Employee;