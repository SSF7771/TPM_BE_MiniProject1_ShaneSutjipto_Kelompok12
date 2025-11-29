const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');
const validateBooking = require('../middlewares/validator.js');

// Show Form
router.get('/book', apiController.getBookingForm);

// Accept Form Data (with middleware validation)
router.post('/book', validateBooking, apiController.createBooking);

// Show saved JSON Data
router.get('/list', apiController.getBookings);

module.exports = router;