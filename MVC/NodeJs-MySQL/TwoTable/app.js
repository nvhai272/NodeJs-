const express = require('express');
const bodyParser = require('body-parser');
const empRoutes = require('./routes/empRoutes');
const depRoutes = require('./routes/depRoutes');
const sequelize = require('./config/database');

const app = express();

// add ejs when do MVC
app.set('view engine', 'ejs');

// check this 
app.use(bodyParser.urlencoded({ extended: true / false }));

app.use('/employees', empRoutes);
app.use('/departments', depRoutes);

// check connection to the database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = app;
