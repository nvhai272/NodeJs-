const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./config/database');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/employees', employeeRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
})
    .catch(err => {
        console.log('Unable to connect', err);
    });