import Parse from "parse/react-native.js";
Parse.initialize("jiM3dxKMrJoyJ3OFSOvKjkNVlWCfJ3GsNknSuqsf","cuRUV83XrqhpyKKMzc5UnHTWxQLmcQSA7lDjSx6N");
Parse.serverURL = 'https://parseapi.back4app.com/';
const { symbol, name, stocksLowerCase } = require('./newDictionary.js');


const getFollowedArray = async (username) => {
    followedArray = [];
    const Account = Parse.Object.extend("Account");
    const query = new Parse.Query(Account);
    try 
    {
        query.equalTo("username", username)
        await query.first().then(function(response)
        {
            followedArray = response.get("followed");
        })
    } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
    return followedArray;
} 

module.exports = {getFollowedArray}
