var Parse = require('parse/node');

Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'
/*
const Stocks = Parse.Object.extend("Stocks");
const stock = new Stocks();

stock.set("TestName", "This is a test name");
stock.save()
.then((object) => {
    console.log(object.id);
}, (error) => {
    console.log(error.message);
});*/


const Stocks = Parse.Object.extend("Stocks");
const stock  = new Parse.Query(Stocks);

stock.get("egwKw5fCK7")
.then((stock) => {
    console.log(stock.get('TestName'));
  // The object was retrieved successfully.
}, (error) => {
    console.log(error.message);
  // The object was not retrieved successfully.
});