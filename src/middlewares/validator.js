const validateBooking = (req, res, next) => {
    const { name, destination, travelers } = req.body;
    if (!name || !destination || !travelers) 
        return res.status(400).send("Data tidak lengkap! Harap isi semua field.");
    
    next();
};

module.exports = validateBooking;