const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    departmentId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departments',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'employees'
});

Employee.belongsTo(Department, { foreignKey: 'departmentId', as: 'department' });
Department.hasMany(Employee, { foreignKey: 'departmentId', as: 'employees' });

module.exports = Employee;