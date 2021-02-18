const { Console } = require('console');
let fs = require('fs') //filesystem

let clearJsonFile = false; //pass in a third command line argument can be anything to clear the json files
const maxFollowedStockAllowed = 5;
const jsonOutput = {'following' : [], 'notFollowing' : []};
const followedStocks = [];
const notFollowedStocks = [];

const stocksSwipedLeft = [];
const stocks = ['aapl', 'msft', 'amzn', 'fb', 'googl', 'tsla', 'goog', 'brk.b', 'jnj', 'jpm', 'nvda', 'v', 'dis', 'pypl', 'pg', 
'unh', 'ma', 'hd', 'bac', 'intc', 'nflx', 'cmcsa', 'adbe', 'vz', 'abt', 'crm', 'xom', 't', 'csco', 'wmt', 'tmo', 'ko', 'avgo', 
'pfe', 'mrk', 'pep', 'abbv', 'nke', 'cvx', 'qcom', 'txn', 'nee', 'acn', 'lly', 'mdt', 'mcd', 'cost', 'dhr', 'hon', 'unp', 'amgn', 
'bmy', 'wfc', 'pm', 'lin', 'c', 'low', 'sbux', 'orcl', 'ups', 'now', 'ba', 'amd', 'rtx', 'cat', 'ibm', 'intu', 'ms', 'gs', 'amat',
'blk', 'mmm', 'amt', 'ge', 'de', 'cvs', 'mu', 'tgt', 'isrg', 'chtr', 'gild', 'fis', 'axp', 'lmt', 'schw', 'tjx', 'lrcx', 'spgi',
'mo', 'syk', 'atvi', 'pld', 'mdlz', 'zts', 'ci', 'cb', 'bdx', 'antm', 'tmus'];

let tempStocks = []; // A list of stocks that the user will go through, will copy from currentListStocks
let currentStock;


/* --------- Debug (Like main()---------------- */
if(process.argv[2] !== undefined)
    clearJsonFile = true;

if(clearJsonFile)
    clearJson();
else
{
    start();
    for (let i = 0; i < 2; i++) {
        console.log("for loop iteration " + (i + 1));
        swipeRight(currentStock);
    }

    for (let i = 0; i < 50; i++) {
        console.log("for loop iteration " + (i + 1));
        swipeLeft(currentStock);
    }

    console.log(
    `current stock: ${currentStock}
    tempStocks length: ${tempStocks.length}
    followedStocks: [${followedStocks}]`
    );
    saveData();
}
/* _______________________________________________*/



// ALWAYS CALL THIS FUNCTION FIRST
/* TODO: Parse through user data and see what they've saved --> Then update currentListStocks
    For now I used the original list of stocks to simulate user data
    Probably should use currentListStocks and followedStocks as saved data in a user account
*/
function start() {
    readData();
    tempStocks = [...notFollowedStocks];
    currentStock = tempStocks[getRandomInt()];
}

// Resets the stack, basically it creates a shallow copy of the stocks list
function reset() {
    console.log("\n---reset has been called---\n");
    tempStocks.push(...stocksSwipedLeft);
    getNextStock();
}

// Obtains the currentStock -- Debugging
function getCurrentStock() {
    console.log(currentStock);
}

// Will add stock to followedStocks array
// Will also delete from shallow copy
function swipeRight(currentStock) {
    if(followedStocks.length === maxFollowedStockAllowed)
    {
        console.log("Max stocks already followed. Delete one to continue adding.");
        return;
    }
    
    if (followedStocks.length === stocks.length) {
        console.log("Liked everything");
        return;
    }
    
    followedStocks.push(currentStock); // Push the stock to the list
    let index = tempStocks.indexOf(currentStock); // Obtain the index in tempStocks
    tempStocks.splice(index, 1); // Delete the element
    
    console.log(`----Added ${currentStock} to followedStocks
    followedStocks: [${followedStocks}]\n`);

    getNextStock();
}

// Will delete from shallow copy
function swipeLeft(currentStock) {

    if (followedStocks.length === stocks.length) {
        console.log("Liked everything");
        return;
    }

    console.log("----Swiped left on: " + currentStock);

    let index = tempStocks.indexOf(currentStock);
    stocksSwipedLeft.push(currentStock)
    tempStocks.splice(index, 1);
    getNextStock();

}

// Retrieves the next stock that's available
// If the length of tempStocks is 0, FOR NOW I'll just call reset()
// TODO: If the length of the currentListStocks is 0, then that means the user had already followed every one of the stocks
function getNextStock() {
    if (followedStocks.length === stocks.length) {
        console.log("Followed all stocks, nothing to reset");
        return;
    }

    else if (tempStocks.length === 0) {
        console.log("Reached the end, reset()");
        currentStock = null;
        reset();
        return;
    }

    currentStock = notFollowedStocks[getRandomInt()];
}

// Generates a random int number between min an max (inclusive)

function getRandomInt(max) {
    return Math.floor(Math.random() * (tempStocks.length-1));
}

//file systems
function saveData() {
    reset();
    jsonOutput.following = followedStocks;
    jsonOutput.notFollowing = tempStocks;
    let JSONdata = JSON.stringify(jsonOutput);
    fs.writeFileSync('stockData.json', JSONdata);

    console.log(`${jsonOutput.following.length} Following: ${jsonOutput.following}`);
    console.log(`${jsonOutput.notFollowing.length} Not Following: ${jsonOutput.notFollowing}`);
}

function readData()
{
    let file;
    let retrievedData;
    try {
        file = fs.readFileSync('stockData.json');
        retrievedData = JSON.parse(file);
        console.log(retrievedData);
        if(retrievedData.following.length > 0)
            followedStocks.push(...retrievedData.following);
        if(retrievedData.notFollowing.length > 0)
            notFollowedStocks.push(...retrievedData.notFollowing);
        else
            notFollowedStocks.push(...stocks);
        
    } catch (error) {
        notFollowedStocks.push(...stocks);
    }

    console.log(`Following: ${followedStocks}`);
    console.log(`Not Following: ${notFollowedStocks}`);
}

function clearJson()
{
    jsonOutput.following = [];
    jsonOutput.notFollowing = [];
    let JSONdata = JSON.stringify(jsonOutput);
    fs.writeFileSync('stockData.json', JSONdata);
}
