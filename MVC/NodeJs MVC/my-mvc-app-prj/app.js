const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

//đường dẫn tới tệp db
const db  = require('./database');



// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const home = require('./routes/index');
const productRoutes = require('./routes/productRoutes');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');



app.use('/', home);
app.use('/products', productRoutes);
app.use('/students', studentRoutes);

app.use('/users', userRoutes);

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
