const { readData, writeData, calculateWarpCost } = require('../utils/helper.js');

// Home
const getHome = (req, res) => {
    res.render('home', { title: 'WarpZone Travel' });
};

// Form Booking
const getBookingForm = (req, res) => {
    res.render('form', { title: 'Book a Ticket' });
};

// Input Form
const createBooking = (req, res) => {
    const { name, email, destination, travelers } = req.body;
    
    // from helper function
    const totalCost = calculateWarpCost(destination, parseInt(travelers));
    
    const newBooking = {
        id: Date.now(), // simple unique ID from date
        name,
        email,
        destination,
        travelers: parseInt(travelers),
        totalCost,
        status: 'Pending',
        date: new Date().toLocaleDateString()
    };

    // Take the old data, push the new data in, then save
    const currentData = readData();
    currentData.push(newBooking);
    writeData(currentData);

    res.redirect('/bookings/list');
};

// Show Data (List Bookings)
const getBookings = (req, res) => {
    const bookings = readData();
    // use array method .map()
    res.render('list', { bookings, title: 'Passenger Manifest' });
};

module.exports = {
    getHome,
    getBookingForm,
    createBooking,
    getBookings
};