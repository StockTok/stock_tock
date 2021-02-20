let fs = require('fs'); //filesystem
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2bc6b32f847f4361ab90a79c93fe9474');
const { symbol, name } = require('./stockDictionary.js');

const file = JSON.parse(fs.readFileSync('stockDataForNews.json', 'utf-8'));
const stocksFollowed = file.following;
const outNewsJsonData = {};

const getData = () =>
{
  let i;
  let exit = 0;
  for(i = 0; i < stocksFollowed.length;i++)
  {
    let stockSymbol = stocksFollowed[i].toUpperCase();
    let stockName = symbol[stocksFollowed[i].toUpperCase()];
    outNewsJsonData[stockSymbol] = {name : stockName};

    outNewsJsonData[stockSymbol].articles = [];
    console.log(stockName);
    newsapi.v2.everything({
      q: stockName,
      language: 'en'
      }).then(response => {
        let articles = response['articles'];
        let j;
        for(j = 0; ;j++)
        {
          try 
          {
            let newsObject  = {};
            newsObject = {title : articles[j]['title'], source : articles[j]['source']['name'], description : articles[j]['description'], author : articles[j]['author'], url : articles[j]['url']}
            outNewsJsonData[stockSymbol].articles.push(newsObject);
          } 
          catch (error) 
          {
            exit++;
            if((exit === stocksFollowed.length)) //reached the end of all company articles
              writeData();
            break;
          }
        }
    });
  }
}

function writeData()
{
  console.log("goodbye world");
  let JSONdata = JSON.stringify(outNewsJsonData,null,2);
  fs.writeFileSync('newsArticles.json', JSONdata);

  /*
  stocksFollowed.forEach(element => {
    console.log(outNewsJsonData[element.toUpperCase()].articles[0].title)
  });*/
}

getData();

