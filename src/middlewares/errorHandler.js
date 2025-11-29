const errorHandler = (err, res) => {
    console.error(err.stack);
    res.status(500).send('Terjadi kesalahan pada server WarpZone!');
};

module.exports = errorHandler;