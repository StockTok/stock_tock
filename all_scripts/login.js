let fs = require('fs')  // filesystem

const accountInfo = {
  'username': undefined,
  'password': undefined
};

const createAccount =
    (username, password) => {
      accountInfo.username = username;
      accountInfo.password = password;
      console.log(`After created\n\tusername: ${
          accountInfo.username}\n\tpassword: ${accountInfo.password}`);

      jsonData = JSON.stringify(accountInfo);
      fs.writeFile('account_info.json', jsonData, function(err) {
        if (err) console.log('error occured');
      });
      if (accountInfo.username === undefined) {
        console.log('The Username field is required');
      }
      if (accountInfo.password === undefined) {
        console.log('The Password field is required');
      } else
        console.log('Account Created');
    }
// createAccount('hello','world')


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
console.log(confirmAccount('hello', 'world'));