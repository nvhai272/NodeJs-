const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const employeeRoutes = require('./routers/employeeRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/employees', employeeRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

