import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';
import {createAccount, confirmAccount} from "./newLogin.js";
const { symbol, name, stocksLowerCase } = require('./newDictionary.js');

const getAllDataMethod = async (user) => {
  let stockUserObject = 
  {
    username:user,
    followed:[],
    stocks : {}
  };

  let tempFollowed;
  const Account = Parse.Object.extend("Account");
  const query = new Parse.Query(Account);
  try 
  {
    query.equalTo("username", user)
    await query.first().then(function(response)
    {
      const name = response.get("username");
      let followed = response.get("followed");
      //alert(`Username: ${name} Followed: ${followed}`);
      //console.log("confirm accout " + followed);
      tempFollowed = followed;
    })
  } catch (error) {
      alert(`User does not exist`);
      return false;
  }

  stockUserObject.followed = tempFollowed;
  //console.log("get all data " + stockUserObject.followed);
  if(stockUserObject.followed === false) return false;
  
  const Stocks = Parse.Object.extend("Stocks");
  const queryStock = new Parse.Query(Stocks);
  for(let i = 0; i < 5; i++)
  {
    try 
    {
      let stockSymbol = stocksLowerCase[i];
      queryStock.equalTo("symbol", stockSymbol);
      await queryStock.first().then(function(response)
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
  return stockUserObject;
}
module.exports = {getAllDataMethod}