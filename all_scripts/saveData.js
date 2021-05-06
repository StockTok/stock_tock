
import Parse from "parse/react-native.js";
// this wasnt working so we will do the above^
//var Parse = require('parse/node');

Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

const saveAllData = async (username, followed) => {

const Account = Parse.Object.extend("Account");
const query = new Parse.Query(Account);

try 
  {
 query.equalTo("username", username)
 await query.first().then(function(response)
     {
 response.set("followed",followed);
 response.save();
    console.log(id);
   })

} catch (error) {

return false;
}}

module.exports = {saveAllData}