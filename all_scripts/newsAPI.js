const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2bc6b32f847f4361ab90a79c93fe9474');
const { symbol, name } = require('./stockDictionary.js');
/*
newsapi.v2.everything({
    q: 'microsoft',
    language: 'en'
  }).then(response => {
    console.log(response);
});*/

console.log(name);