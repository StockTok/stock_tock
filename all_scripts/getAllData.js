import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';
import {getFollowedArray} from "./newStockArrays.js";
const { symbol, name, stocksLowerCase } = require('./newDictionary.js');

const getAllDataMethod = async (user) => {
  let stockUserObject = 
  {
    username:user,
    followedArray:[],
    stocks : {}
  };

  followedArray = getFollowedArray();
  for(let i = 0; i < stocksLowerCase.length; i++)
  {
    try 
    {
      let stockSymbol = stocksLowerCase[i];
      query.equalTo("symbol", stockSymbol);
      await query.first().then(function(response)
      {
        stockUserObject.stocks[stockSymbol] = 
        {
          symbol : stockSymbol.toUpperCase(), 
          name : "",
          prices: "",
          news:""
        };

        const name = response.get("name");
        const prices = response.get("prices");
        const news = response.get("news");

        stockUserObject.stocks.stockSymbol.name = name;
        stockUserObject.stocks.stockSymbol.prices = prices;
        stockUserObject.stocks.stockSymbol.news = news;
      })
    } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
  }
  console.log(stockUserObject);
  return stockUserObject;
}

module.exports = {getAllDataMethod}