const app = require('./src/app.js');
const config = require('./src/config/app.config.js');

app.listen(config.port, () => {
    console.log(`Server WarpZone berjalan di http://localhost:${config.port}`);
});