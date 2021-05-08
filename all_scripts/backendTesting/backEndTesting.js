import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';
import {createAccount, confirmAccount} from "../newLogin.js";
import {getAllStockData} from "../newStockData.js";
import {getAllStockData} from "../newStockData.js";
import {getAllNews} from "../newNews.js";
import {getAllDataMethod} from "../getAllData.js";
const { symbol, name, stocksLowerCase } = require('./newDictionary.js');

let testUser = "test@gmail.com";
let testFollowedArray = ['tsla', 'googl', 'amzn'];
let availableStocks = ['aapl', 'msft', 'amzn', 'tsla', 'googl']

//test
const testCreateAccount = async () =>
{
  await (createAccount(userName));

  const Account = Parse.Object.extend("Account");
  const query = new Parse.Query(Account);
  try 
  {
    query.equalTo("username", testUser)
    await query.first().then(function(response)
    {
      const name = response.get("username");
      //const pass = response.get("password");
      if(name === testUser) {
        console.log("TRUE with test@gmail.com - Passed Test Case ");
      }
      else {
        console.log("FALSE with test@gmail.com - Failed Test Case ");
      }
    })
  }
  catch {error} {
    console.log("FALSE with test@gmail.com - Failed Test Case ");
  }
}

//todaysPrice as a string in ##.## format
const testGetPriceData = async (symbolOfStock, todaysPrice) =>
{
  await getAllStockData();

  const Stocks = Parse.Object.extend("Stocks");
  const queryStock = new Parse.Query(Stocks);
  try
  {
    queryStock.equalTo("symbol", symbolOfStock);
    await queryStock.first().then(function(response)
    {
      if(response.one === todaysPrice)
        console.log("TRUE database price matches current stock price. - Passed Test Case ");
      else
        console.log("FALSE database price does NOT match current stock price - Failed Test Case ");
    })
  } catch (error) {
    console.log("ERROR with Test Case");
  }
}

const testGetNews = async () =>
{ 
  await getAllNews();
  const Stocks = Parse.Object.extend("Stocks");
  const stocks = new Parse.Query(Stocks);
  
  for(let i = 0; i < 5; i++)
  {
    let symbolOfStock = availableStocks[i];
    try {
      stocks.equalTo("symbol", symbolOfStock);
      await stocks.first().then(function(response)
      {
        let news = response.get("news");
        for (let i=0; i<news.length; i++)
        {
          let stockName = symbol[symbolOfStock];
          let title = news[i]['title'].toLowerCase();
          if(title.includes('your') || title.includes('you') || title.includes('how') || !titleOfArticle.includes(stockName.toLowerCase()))
          {
            console.log("FALSE " + symbolOfStock + " news included forbidden keywords - Failed Test Case");
            return;
          }
        }
        console.log("TRUE  " + symbolOfStock + "  news contains stock name and approved keywords - Passed Test Case");
      });
        
    } catch (error) {
      console.log("ERROR news errors");
    }
  }
}

const testGetAllDataMethod = async () => 
{
  let userObject = await getAllDataMethod(userName);
  if (userObject.username === testUser)
    console.log("Passed Username");
  else
    console.log("Failed Username");
  
  try
  {
    for (let i = 0; i < testFollowedArray.length; i++)
    {
      if(testFollowedArray[i] === userObject.followed[i])
        continue;
      else
      {
        console.log("Failed followed array test case");
      }
    }
    console.log("Passed followed array test case");
  }
  catch (error)
  {
    console.log("Failed followed array test case");
  }

  function validStocksFilter(symbolOfStock)
  {

    for(let i=0;i<5;i++)
    {
      if(symbolOfStock === availableStocks[i])
        return true;
      else 
        return false;
    }
  }

  let keysArray = Object.keys(userObject.stocks);
  let filteredArray = keysArray.filter(item => keysArray.indexOf(item) !== -1);
  if(filteredArray.length === 5) 
    console.log("Passed Get Stock Object inside of user data object")
  else
  console.log("Failed Get Stock Object inside of user data object")
}



//command line testing args
if(process.argv[2] === "Account")
{
  testCreateAccount();
}

else if(process.argv[2] === "Prices")
{
  testGetPriceData([process.argv[3]], process.argv[4]);
}

else if(process.argv[2] === "News")
{
  testGetNews([process.argv[3]]);
}

else if(process.argv[2] === "Data")
{
  testGetPriceData();
}