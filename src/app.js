const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.js');
const apiRoutes = require('./routes/apiRoutes.js');
const errorHandler = require('./middlewares/errorHandler.js');

const app = express();

// Tema: Interdimensional Travel Agency (WarpZone)

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware parsing body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', indexRoutes); // Home Route
app.use('/bookings', apiRoutes); // API Route

// Error Handler
app.use(errorHandler);

module.exports = app;