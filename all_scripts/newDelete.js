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
        if (result.option === 'exit' || result.option === 'Exit') {
          return process.exit();
        }
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

    return stockInList;

}

//copies the follow list from the file to the new follow list. 
function parseFollowedList(originalFollowedList){
    var i = 0;
    while(i< originalFollowedList.length){
      followedStocks[i] = originalFollowedList[i];
       i++;
    }

}

// copies the notFollowed list from the file to the new notFollow list.
function parseNotFollowedList(originalNotFollowedList) {
  var i = 0;
  while (i < originalNotFollowedList.length) {
    notFollowedStocks[i] = originalNotFollowedList[i];
    i++;
  }

}

//Writes the updated stock lists onto the file.
function writeToFile(fileFollowing, fileNotFollowing){
  for (var i = 0; i < followedStocks.length; i++) {
        fileFollowing[i] = followedStocks[i];
  }
  for(var i = 0; i < notFollowedStocks.length;i++){
      fileNotFollowing[i] = notFollowedStocks[i];
  }
}

function deleteStock(stockToDelete) {
    var file = JSON.parse(fs.readFileSync('stockDataDelete.json', 'utf-8'));


    const inFollowedList = checkingFollowedList(stockToDelete, file.following);
    if (inFollowedList == false) {
      console.log(`\nCannot delete stock you are not currently following`);
      console.log(`Enter 'exit' if you want to quit the program or `);
      deletePrompt();
    }else {
      parseFollowedList(file.following);
      parseNotFollowedList(file.notFollowing);
      console.log('Follow List before removal: ', followedStocks);
      console.log('Not followed List:', notFollowedStocks);

      for(var i = 0; i < followedStocks.length;i++) {
        if(followedStocks[i] == stockToDelete){
            followedStocks.splice(i,1);
            break;
        }
    }

    notFollowedStocks.push(stockToDelete);



    writeToFile(jsonOutput.following, jsonOutput.notFollowing);
    let JSONdata = JSON.stringify(jsonOutput);
    fs.writeFileSync('stockData.json', JSONdata);
    console.log('\nFollow List after removal: ', followedStocks);
    console.log('Not followed List:', notFollowedStocks);
    console.log(`\n'${stockToDelete}' is now removed from the watchlist.`);
    }
}

deletePrompt();
