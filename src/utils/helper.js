const fs = require('fs');
const path = require('path');

// to read the data
const readData = () => {
    const filePath = path.join(__dirname, '../../data/data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData || '[]');
};

// to save data
const writeData = (data) => {
    const filePath = path.join(__dirname, '../../data/data.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// calculate "Warp Cost" (Biaya perjalanan)
// use Array Method .find()
const calculateWarpCost = (destination, travelers) => {
    const destinations = [
        { name: '8-Bit World', basePrice: 500 },
        { name: 'Mars 3000', basePrice: 1200 },
        { name: 'Underwater City', basePrice: 800 }
    ];

    const target = destinations.find(d => d.name === destination);
    const price = target ? target.basePrice : 1000;
    
    return price * travelers;
};

module.exports = { readData, writeData, calculateWarpCost };