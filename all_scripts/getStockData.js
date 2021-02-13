let fs = require('fs'); //filesystem
//const { getDefaultSettings } = require('http2');
//const { get } = require('react-native/Libraries/Utilities/PixelRatio');
const alphaVantage = require('alphavantage') ({key: 'UVTP5HMN7EXSDLLV'});

let allStocks = ['msft', 'gme', 'aapl', 'tsla'];
let allStockData = {};

let microsoftData;
let microsoftMonthly;
let parts; // Added just in case
let keys;
let monthsHigh = [];
/*
date = new Date()
date.setDate(date.getDate()-1)
let printDate = date.toISOString().substring(0, 10);
console.log(printDate);
*/

console.log("Running");
alphaVantage.data.monthly(`msft`).then(data => {
    microsoftMonthly = data;
    //console.log(microsoftMonthly);
    //var jsonMsoft = (JSON.parse(microsoftData));
    parts = microsoftMonthly['Monthly Time Series']; // Obtain the dictionary from Monthly Time series
    keys = Object.keys(parts); // Extract the keys from variable parts (into a list)
    //console.log(keys);
    //console.log(microsoftMonthly);//['Monthly Time Series'][0]['2. high']);
    
    let i;
    // Grab the first 3 indices from keys and push them to a list (months high)
    for (i = 0; i < 3; i++) {
        monthsHigh.push(microsoftMonthly['Monthly Time Series'][keys[i]]['2. high']);
        
    }
    console.log(monthsHigh);

});

/*
console.log('\n\n\n\n\n');
alphaVantage.data.daily(`msft`).then(data => {
    microsoftData = data
    //console.log(microsoftData);
});*/
