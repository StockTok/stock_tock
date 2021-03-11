import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';
//let fs = require('fs')  // filesystem

const { symbol, name, stocksLowerCase } = require('./newDictionary');

const alphaVantage1 = require('alphavantage') ({key: 'UVTP5HMN7EXSDLLV'});
const alphaVantage2 = require('alphavantage') ({key: 'LRYPE1SFTV3IB20I'});
const alphaVantage3 = require('alphavantage') ({key: '4DC9TBV26C1MXSQV'});
const alphaVantage4 = require('alphavantage') ({key: 'FS91QNJX525CJ7I5'});
const alphaVantage5 = require('alphavantage') ({key: 'H519FCGYYRX90RPE'});

const alphaVantageArray = [alphaVantage1,alphaVantage2,alphaVantage3,alphaVantage4,alphaVantage5];
let currentAlphaVantageNum = 0;

/*
const saveAllData = async () => 
{
    const Stocks = Parse.Object.extend("Stocks");
    const stocks  = new Parse.Query(Stocks);
    
    /*
    try {
        stocks.equalTo("name", "stocks");
        await stocks.first().then(function(response){
            response.set("allStocks", allStocksObject);
            response.save();
            //alert(allStocksObject['aapl']['name']);
            alert(response.get('allStocks'));
        });
        
    } catch (error) {
        alert('Error Occured Oh No!')
    }
    
}*/

/*
const createStock = async (symbol, name) => {

    const Stock = Parse.Object.extend("Stocks");
    const stocks  = new Stock()
    stocks.set("symbol", symbol);
    stocks.set("name", name);
    stocks.set("prices", 
    {  
        one : '1',
        two : '2',
        three : '3',
        percent : '%'
    });
    
    try{
        let result = await stocks.save()
        alert('New object created with objectId: ' + result.id);
    } catch(error){
        alert('Failed to create new object, with error code: ' + error.message);
    }
}*/

const getAllData = () =>
{
    for(let i = 0; i<2; i++)
    {
        getMonthlyData(stocksLowerCase[i]);   
    }
}

async function getMonthlyData(symbol) {
    let dailyHighArray = []; // Initialize monthsHigh array   
    console.log(`Looking at ${symbol}`);
    
    if(currentAlphaVantageNum>4)
        return;
    try
    {
        await alphaVantageArray[currentAlphaVantageNum].data.daily(`${symbol}`).then(data => 
        {
            console.log(data);
            stockDaily = data;
            let parts = stockDaily['Time Series (Daily)']; // Obtain the dictionary from Monthly Time series
            let keys = Object.keys(parts); // Extract the keys from variable parts (into a list)
            
            // Grab the first 3 indices from keys and push them to a list (months high)
            let i;
            for (i = 0; i < 3; i++) {
                let text = parseFloat(stockDaily['Time Series (Daily)'][keys[i]]['2. high']) // Converts text to float value
                dailyHighArray.push(text);
            }
            
            let percentChange = ((dailyHighArray[0] - dailyHighArray[2]) / dailyHighArray[0]) * 100; // Calculating percent change
            percentChange = percentChange<0 ? percentChange.toFixed(2) : `+${percentChange.toFixed(2)}%`;
            for(i=0; i<3; i++)
            {
                dailyHighArray[i] = dailyHighArray[i].toFixed(2)
            }
            updateStock(symbol, dailyHighArray,percentChange);
        });
    } 
    catch (error)
    {
        currentAlphaVantageNum++;
        getMonthlyData(symbol);
    }

}

async function updateStock(symbol,array,percentChange)
{
    const Stocks = Parse.Object.extend("Stocks");
    const stocks  = new Parse.Query(Stocks);
    
    try {
        stocks.equalTo("symbol", symbol);
        await stocks.first().then(function(response){
            response.set("prices", {one : array[0], two : array[1], three : array[2], percent : percentChange});
            response.save();
            //alert(allStocksObject['aapl']['name']);
            alert(symbol);
        });
        
    } catch (error) {
        alert('Error Occured Oh No!')
    }
}

module.exports = {getAllData};
