const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2bc6b32f847f4361ab90a79c93fe9474');

newsapi.v2.everything({
    q: 'Microsoft',
    language: 'en'
  }).then(response => {
    console.log(response);
});