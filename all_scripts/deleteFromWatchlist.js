const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
let fs = require('fs') //filesystem

const prompt = require('prompt');
prompt.start();

const jsonOutput = {'following' : [], 'notFollowing' : []};
const followedStocks = [];
const notFollowedStocks = [];


//Allows the user to type in what stock they want to delete.
function deletePrompt(){
    console.log('Type in a stock to delete');
    prompt.get(['option'], (err,result) =>{
        if(err)
        throw err;
        console.log(`The user entered: ${result.option}`);
        deleteStock(result.option);
    });


}

deletePrompt();

function deleteStock(stockToDelete) {
      var file = JSON.parse(fs.readFileSync('stockDataDelete.json', 'utf-8'));
      console.log(file.following);

      let JSONdata = JSON.stringify(jsonOutput);
      fs.writeFileSync('stockData.json', JSONdata);
    }



