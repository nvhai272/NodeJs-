const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');

const depRoutes = require('./routers/depRouter');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true/false }));

app.use('/departments', depRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(3000);
        console.log('Server is running on port 3000');
    })
    .catch((err) => {
        console.log('Connection failed:', err);
    });
