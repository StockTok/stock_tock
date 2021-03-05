var Parse = require('parse/node');

Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'
/*
const Stocks = Parse.Object.extend("Stocks");
const stock = new Stocks();
stock.set("playerName", "A. Wed");
stock.set("yearOfBirth", 1997);
stock.set("emailContact", "a.wed@email.io");
stock.set("attributes", ["fast","good conditioning"])

stock.set("TestName", "Great Name");
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
    stock.set("TestName", "Willy Stevens");
    console.log(stock.get('TestName'));
    stock.save();
  // The object was retrieved successfully.
}, (error) => {
    console.log(error.message);
  // The object was not retrieved successfully.
});
/*
const Stock = Parse.Object.extend("Stocks");
const soccerPlayers = new Parse.Query(Stock);

// Retrieve the object by id
soccerPlayers.get("Nano0VByLI")
.then((player) => {
  // The object was retrieved successfully and it is ready to update.
  player.destroy().then((player) => {
      console.log(player.id);
    // The object was deleted from the Parse Cloud.
  }, (error) => {
    // The delete failed.
    // error is a Parse.Error with an error code and message.
  })
}, (error) => {
  // The object was not retrieved successfully.
});*/