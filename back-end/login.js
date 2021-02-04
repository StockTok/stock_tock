let fs = require('fs') //filesystem
const prompt = require('prompt');
prompt.start();

const accountInfo = 
{
    "username": undefined,
    "password": undefined
};

function startup()
{
    console.log('1 for create account, 2 for login')
    prompt.get(['option'], (err,result) => 
    {
        if(err)
            throw err;
        if(result.option === '1')
            createAccount();
        else
            loginToAccount();
    })
}

function createAccount()
{
    prompt.get(['username', 'password'], (err, result) => 
    {
        if (err)
            throw err;
        // print user details
        console.log(`Username: ${result.username}\nPassword: ${result.password}`);
        accountInfo.username = result.username;
        accountInfo.password = result.password;
        writeJsonData();
    }
)};

function loginToAccount()
{
    var file = JSON.parse(fs.readFileSync('account_info.json', 'utf-8'));
    console.log(file);
    
    prompt.get(['username', 'password'], (err, result) => 
    {
        if (err)
            throw err;    
        if(result.username === file.username && result.password === file.password)
            console.log("Login Successful");
        else
            console.log("Login Not Successful");
    }
)};

function writeJsonData()
{
    jsonData = JSON.stringify(accountInfo);
    fs.writeFile("account_info.json", jsonData, function(err) 
    {
        if(err)
            console.log("error occured");
    });
    console.log("Goodbye");
}

startup();
