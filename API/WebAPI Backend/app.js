require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');

const studentRoutes = require('./routes/studentRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.use('/api/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});