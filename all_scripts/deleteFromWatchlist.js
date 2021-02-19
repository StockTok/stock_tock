let fs = require('fs') //filesystem

const jsonOutput = {'following' : [], 'notFollowing' : []};
const followedStocks = [];
const notFollowedStocks = [];

function deleteStock(stockToDelete)
{
    var file = JSON.parse(fs.readFileSync('stockDataDelete.json', 'utf-8'));

    let JSONdata = JSON.stringify(jsonOutput);
    fs.writeFileSync('stockData.json', JSONdata);
}