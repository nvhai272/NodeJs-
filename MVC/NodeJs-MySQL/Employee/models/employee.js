const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    phone_number: {
        type: DataTypes.STRING(20),
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    hire_date: {
       type: DataTypes.DATE,
       allowNull: false,
       validate: {
           notEmpty: true
       }
    },
    salary: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

// Create table if not exist

sequelize.sync({ force: false })
.then(() => {
    console.log('Employee table created');
})
.catch(err =>{
    console.err('khong tao dc bang',err);
})

module.exports = Employee;