import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';
import {createAccount, confirmAccount} from "./newLogin.js";
const { symbol, name, stocksLowerCase } = require('./newDictionary.js');

const getAllDataMethod = async (user, password) => {
  let stockUserObject = 
  {
    username:user,
    password:password,
    followed:[],
    stocks : {}
  };

  stockUserObject.followed = await confirmAccount(user,password);
  if(stockUserObject.followed === false) return false;
  return stockUserObject;
}
  /*
  const Stocks = Parse.Object.extend("Stocks");
  const query = new Parse.Query(Stocks);
  for(let i = 0; i < 5; i++)
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
          name : symbol[stockSymbol.toUpperCase()],
          prices: response.get("prices"),
          news: response.get("news")
        };
      })
    } catch (error) {
        alert(`Failed: ${error.message}`);
    }
  }
  //console.log(stockUserObject);
  return stockUserObject;
}
*/
module.exports = {getAllDataMethod}