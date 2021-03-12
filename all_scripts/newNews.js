//let fs = require('fs'); //filesystem
import Parse from "parse/react-native.js";
//Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
//Parse.serverURL = 'https://parseapi.back4app.com/';

//const NewsAPI = require('newsapi');
//const newsapi = new NewsAPI('2bc6b32f847f4361ab90a79c93fe9474');
let newsURL = "http://newsapi.org/v2/everything?q=tesla&language=en&sortBy=publishedAt&apiKey=2bc6b32f847f4361ab90a79c93fe9474";
//let newsURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2bc6b32f847f4361ab90a79c93fe9474`
//http://newsapi.org/v2/everything?q=tesla&from=2021-02-12&sortBy=publishedAt&apiKey=API_KEY

const { symbol, name, stocksLowerCase } = require('./newDictionary.js');

const getNews = async (stockSymbol) =>
{
  const outNewsArticleArray = [];
  let symbolOfStock = stockSymbol.toUpperCase();
  let stockName = symbol[symbolOfStock];

  console.log(stockName);
  //let result;
  let result = await fetch(newsURL).then((response) => (response = response.json()));
  //await fetch(newsURL).then((response) => {result = response});
  console.log(result.articles);
    /*{
      
      console.log(JSON.stringify(response));
      let articles = response['articles'];
      let j;
      for(j = 0; j<5;j++)
      {
        try 
        {
          let newsObject  = {};
          let titleOfArticle = articles[j]['title'].toLowerCase();
          if(titleOfArticle.includes('your') || titleOfArticle.includes('you') || titleOfArticle.includes('how') || !titleOfArticle.includes(stockName.toLowerCase()))
            continue;
          newsObject = {title : articles[j]['title'], source : articles[j]['source']['name'], description : articles[j]['description'], author : articles[j]['author'], url : articles[j]['url']}
          outNewsArticleArray.push(newsObject);
        } 
        catch (error) 
        {
          break;
        }
      }
      
      //updateNews(stockSymbol, outNewsArticleArray);
  });*/
}
/*
async function updateNews(stockSymbol, newsArray)
{
    const Stocks = Parse.Object.extend("Stocks");
    const stocks = new Parse.Query(Stocks);
    
    try {
        stocks.equalTo("symbol", stockSymbol);
        await stocks.first().then(function(response){
            response.set("news", newsArray);
            response.save();
            //alert(allStocksObject['aapl']['name']);
            alert(symbol);
        });
        
    } catch (error) {
        alert('Error Occured Oh No!')
    }
}*/

const getAllNews = () =>
{
    for(let i = 0; i<1; i++)
    {
        getNews(stocksLowerCase[i]);   
    }
}

/*
function writeData()
{
  console.log("goodbye world");
  let JSONdata = JSON.stringify(outNewsJsonData,null,2);
  fs.writeFileSync('newsArticles.json', JSONdata);

  /*
  stocksFollowed.forEach(element => {
    console.log(outNewsJsonData[element.toUpperCase()].articles[0].title)
  });
}*/

//getData();
module.exports = {getAllNews};

