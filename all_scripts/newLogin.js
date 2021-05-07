import Parse from "parse/react-native.js";
import { Flow } from "react-native-animated-spinkit";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';


const createAccount = async (username) => {

const Account = Parse.Object.extend("Account");
const account  = new Account()
  account.set("username", username);
  account.set("followed", []);

  try{
    let result = await account.save()
    //alert('New object created with objectId: ' + result.id);
  }catch(error){
      //alert('Failed to create new object, with error code: ' + error.message);
  }
}

const confirmAccount = async (username) => {
  const Account = Parse.Object.extend("Account");
  const query = new Parse.Query(Account);
  try 
  {
    query.equalTo("username", username)
    await query.first().then(function(response)
    {
      const name = response.get("username");
      //const pass = response.get("password");
      if((username === name))
      {
        let followed = response.get("followed");
        //alert(`Username: ${name} Followed: ${followed}`);
        console.log("confirm accout " + followed);
        return followed;
      }
      else
        return false;
    })
  } catch (error) {
      //alert(`User does not exist`);
      return false;
  }
}

module.exports = {createAccount, confirmAccount}