const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/', productRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

