let fs = require('fs'); //filesystem
//const { getDefaultSettings } = require('http2');
//const { get } = require('react-native/Libraries/Utilities/PixelRatio');
const alphaVantage = require('alphavantage') ({key: 'UVTP5HMN7EXSDLLV'});

let allStocks = ['msft', 'gme', 'aapl', 'tsla'];
let allStockData = {};

let microsoftData;
let microsoftMonthly;


date = new Date()
date.setDate(date.getDate()-1)
let printDate = date.toISOString().substring(0, 10);
console.log(printDate);


/*
alphaVantage.data.monthly(`msft`).then(data => {
    microsoftMonthly = JSON.parse(data);
    //console.log(microsoftMonthly);
    //var jsonMsoft = (JSON.parse(microsoftData));
    
    console.log(microsoftMonthly);//['Monthly Time Series'][0]['2. high']);

});*/

/*
console.log('\n\n\n\n\n');
alphaVantage.data.daily(`msft`).then(data => {
    microsoftData = data
    //console.log(microsoftData);
});*/
