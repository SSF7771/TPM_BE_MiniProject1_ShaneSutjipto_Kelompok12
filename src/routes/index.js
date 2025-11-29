const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes.js');
const apiController = require('../controllers/apiController.js');

// Route Home (Root)
router.get('/', apiController.getHome);

// Sambungkan ke apiRoutes
// Semua route di apiRoutes akan berawalan /bookings karena diset di app.js nanti,
// atau kita atur di sini agar rapi. 
// Disini saya buat direct saja agar route Home terpisah.

module.exports = router;