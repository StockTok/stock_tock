let fs = require('fs'); //filesystem
const { symbol, name } = require('./stockDictionary.js');
//const { getDefaultSettings } = require('http2');
//const { get } = require('react-native/Libraries/Utilities/PixelRatio');
const alphaVantage = require('alphavantage') ({key: 'UVTP5HMN7EXSDLLV'});

// let allStocks = ['msft', 'gme', 'aapl', 'tsla'];
let allStockData = {}; // This will record the symbol and their data

let stockMonthly;
let parts; // The parts are referring to a specific category in the JSON file (i.e. "Monthly Time Series")
let keys; // Keys that are contained in parts
let convertedText; // Converts the values from string to float
let priceChange;
const followedStocks = []; // Obtained from reading from stockData.json

/* --------- Debug (Like main()---------------- */
readData();

for (let i = 0; i < followedStocks.length; i++) {
    //console.log(`Looking at ${followedStocks[i]}`);
    getMonthlyData(followedStocks[i]);
}

// for (var key in allStockData) {
//     console.log(key + " : " + allStockData[key]);
// }


/* _______________________________________________*/

/* Reads data from JSON file.
   For this code, I'm only focusing on the followed
   list since that is what we're obtaining the data from (for now) */
function readData() {
    let file;
    let retrievedData;
    try {
        file = fs.readFileSync('stockData.json');
        retrievedData = JSON.parse(file);
        console.log(retrievedData);
        if(retrievedData.following.length > 0)
            followedStocks.push(...retrievedData.following);
        // if(retrievedData.notFollowing.length > 0)
        //     notFollowedStocks.push(...retrievedData.notFollowing);
        // else
        //     notFollowedStocks.push(...stocks);
        
    } catch (error) {
        console.error("File read error");
        //notFollowedStocks.push(...stocks);
    }

    console.log(`Following: ${followedStocks}`);
    //console.log(`Not Following: ${notFollowedStocks}`);
}

function getMonthlyData(symbol) {
    let monthsHighArray = []; // Initialize monthsHigh array 
    
    console.log("getMonthlyData method called");
    console.log(`Looking at "${symbol}"`);
    
    alphaVantage.data.monthly(`${symbol}`).then(data => {
    stockMonthly = data;
    parts = stockMonthly['Monthly Time Series']; // Obtain the dictionary from Monthly Time series
    keys = Object.keys(parts); // Extract the keys from variable parts (into a list)
    
    // Grab the first 3 indices from keys and push them to a list (months high)
    let i;
    for (i = 0; i < 3; i++) {
        convertedText = parseFloat(stockMonthly['Monthly Time Series'][keys[i]]['2. high']) // Converts text to float value
        monthsHighArray.push(convertedText);
    }
    priceChange = ((monthsHighArray[0] - monthsHighArray[2]) / monthsHighArray[0]) * 100; // Calculating price change
    console.log(`\n----------\nPrice of ${symbol} over 3 months: `, monthsHighArray[0], monthsHighArray[1], monthsHighArray[2]);
    console.log(`Price change over 3 month period: ${priceChange.toFixed(2)}%` + "\n----------");

    //allStockData[symbol] = priceChange; // Couldn't figure out how dictionaries work in javascript

    });

}



/*
console.log('\n\n\n\n\n');
alphaVantage.data.daily(`msft`).then(data => {
    microsoftData = data
    //console.log(microsoftData);
});*/
