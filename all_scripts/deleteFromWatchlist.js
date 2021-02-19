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

//checks to make sure the stock entered by user is in their current stock followed list.
function checkingFollowedList(userStock, StockFollowList){

    var stockInList = true;

    for( var i = 0; i < StockFollowList.length; i++){
        if(userStock === StockFollowList[i]){
            stockInList = true;
            break;
        }
        stockInList = false;
    }

    if(!stockInList){
        console.log(`Stock is not in list!`);
        deletePrompt();
    }
}

//copies the follow list from the file to the new follow list. 
function parseFollowedList(originalFollowedList){
    var i = 0;
    while(i< originalFollowedList.length){
      followedStocks[i] = originalFollowedList[i];
       i++;
    }
    if(followedStocks.length === originalFollowedList.length){
        console.log("Sucessful parsing");
        console.log(followedStocks);
    }
    else{
        console.log('problem!');
    }
}

function deleteStock(stockToDelete) {
      var file = JSON.parse(fs.readFileSync('stockDataDelete.json', 'utf-8'));
      console.log(file.following);

      checkingFollowedList(stockToDelete, file.following);
      parseFollowedList(file.following);

      let JSONdata = JSON.stringify(jsonOutput);
      fs.writeFileSync('stockData.json', JSONdata);
    }

    deletePrompt();
