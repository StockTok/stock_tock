let fs = require('fs'); //filesystem
const { symbol, name } = require('./stockDictionary.js');
//const { getDefaultSettings } = require('http2');
//const { get } = require('react-native/Libraries/Utilities/PixelRatio');
const alphaVantage = require('alphavantage') ({key: 'UVTP5HMN7EXSDLLV'});

let allStocks = ['msft', 'gme', 'aapl', 'tsla'];
let allStockData = {};

let microsoftData;
let microsoftMonthly;
let parts; // The parts are referring to a specific category in the JSON file (i.e. "Monthly Time Series")
let keys; // Keys that are contained in parts
let convertedText; // Converts the values from string to float
let monthsHighArray = [];
let priceChange;


console.log("Running");
alphaVantage.data.monthly(`msft`).then(data => {
    microsoftMonthly = data;
    parts = microsoftMonthly['Monthly Time Series']; // Obtain the dictionary from Monthly Time series
    keys = Object.keys(parts); // Extract the keys from variable parts (into a list)
    
    // Grab the first 3 indices from keys and push them to a list (months high)
    let i;
    for (i = 0; i < 3; i++) {
        convertedText = parseFloat(microsoftMonthly['Monthly Time Series'][keys[i]]['2. high']) // Converts text to float value
        monthsHighArray.push(convertedText);
        
    }
    priceChange = ((monthsHighArray[0] - monthsHighArray[2]) / monthsHighArray[0]) * 100; // Calculating price change
    console.log("Price of stock over 3 months: " + monthsHighArray);
    console.log(`Price change over 3 month period: ${priceChange.toFixed(2)}%`);

});

/*
console.log('\n\n\n\n\n');
alphaVantage.data.daily(`msft`).then(data => {
    microsoftData = data
    //console.log(microsoftData);
});*/
