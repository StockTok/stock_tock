let fs = require('fs') //filesystem

const prompt = require('prompt');
prompt.start();

const jsonOutput = {'following' : [], 'notFollowing' : []};
const followedStocks = [];
const notFollowedStocks = [];

function deletePrompt(){
    console.log('type in a stock to delete');
    prompt.get(['option'], (err,result) =>{
        if(err)
        throw err;

        console.log(result.option);
    })
}
function deleteStock(stockToDelete)
{
    var file = JSON.parse(fs.readFileSync('stockDataDelete.json', 'utf-8'));
    console.log(file.following);

    let JSONdata = JSON.stringify(jsonOutput);
    fs.writeFileSync('stockData.json', JSONdata);
}


deletePrompt();
deleteStock();