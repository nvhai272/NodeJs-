const express = require('express');
const bodyParser = require('body-parser');

const employeeRouter = require('./routes/employeeRoutes');
const departmentRouter = require('./routes/departmentRoutes');

const sequelize = require('./config/database');

app.use(bodyParser.json());
const app = express();

app.use('/employees', employeeRouter);
app.use('/departments', departmentRouter);

sequelize.sync().then(() => {
    console.log('Database connected')
})
    .catch(err => {
        console.log(err => {
            console.log('Database connection failed',err)
        })
    });

    module.exports = app;