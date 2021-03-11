import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';


const createAccount = async (username, password) => {

const Account = Parse.Object.extend("Account");
const account  = new Account()
  account.set("username", username);
  account.set("password", password);

  try{
    let result = await account.save()
    alert('New object created with objectId: ' + result.id);
  }catch(error){
      alert('Failed to create new object, with error code: ' + error.message);
  }
}


module.exports = {
  createAccount
}


/**var Parse = require('parse/node');

Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

const Account = Parse.Object.extend("Account");
const account  = new Account();

const createAccount = (username, password) => 
{
  account.set("username", username);
  account.set("password", password);

  account.save()
  .then((object) => {
      console.log(object.id);
  }, (error) => {
      console.log(error.message);
  });
}

module.exports = {createAccount};

//createAccount('Mason','StockTock');


const confirmAccount = (username, password) => {
  var file = JSON.parse(fs.readFileSync('account_info.json', 'utf-8'));
  console.log(file);

  if (username === file.username && password === file.password) {
    return 1;
  } else if (username != file.username) {
    return -1;
  } else if (password != file.password) {
    return 0;
  }
} 
console.log(confirmAccount('hello', 'world'));*/