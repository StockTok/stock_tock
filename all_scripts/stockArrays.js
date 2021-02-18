const { Console } = require('console');
let fs = require('fs') //filesystem

const followedStocks = []; // -----> TODO: Need to read from user's file from account_info to obtain what they followed and whatnot
const stocksSwipedLeft = [];
const stocks = ['aapl', 'msft', 'amzn', 'fb', 'googl', 'tsla', 'goog', 'brk.b', 'jnj', 'jpm', 'nvda', 'v', 'dis', 'pypl', 'pg', 
'unh', 'ma', 'hd', 'bac', 'intc', 'nflx', 'cmcsa', 'adbe', 'vz', 'abt', 'crm', 'xom', 't', 'csco', 'wmt', 'tmo', 'ko', 'avgo', 
'pfe', 'mrk', 'pep', 'abbv', 'nke', 'cvx', 'qcom', 'txn', 'nee', 'acn', 'lly', 'mdt', 'mcd', 'cost', 'dhr', 'hon', 'unp', 'amgn', 
'bmy', 'wfc', 'pm', 'lin', 'c', 'low', 'sbux', 'orcl', 'ups', 'now', 'ba', 'amd', 'rtx', 'cat', 'ibm', 'intu', 'ms', 'gs', 'amat',
'blk', 'mmm', 'amt', 'ge', 'de', 'cvs', 'mu', 'tgt', 'isrg', 'chtr', 'gild', 'fis', 'axp', 'lmt', 'schw', 'tjx', 'lrcx', 'spgi',
'mo', 'syk', 'atvi', 'pld', 'mdlz', 'zts', 'ci', 'cb', 'bdx', 'antm', 'tmus'];

let tempStocks;
let isEmpty; // Checks if the stack is empty
let currentStock;


start();

console.log(
`isEmpty Status: ${isEmpty}
current stock: ${currentStock}`
);

// ALWAYS CALL THIS FUNCTION FIRST
function start() {
    reset();
    isEmpty = false;

    //console.log("Length of stocks array: " + stocks.length)
    //console.log("Looking for undefined: " + randomNumber(0, stocks.length - 1));
    currentStock = stocks[randomNumber(0, stocks.length - 1)];

}

// Resets the stack, basically it creates a shallow copy of the stocks list
function reset() {
    tempStocks = [...stocks];
    isEmpty = false;
}

// Obtains the currentStock -- Debugging
function getCurrentStock() {
    console.log(currentStock);
}

// Will add stock to followedStocks array
// Will also delete from shallow copy
function swipeLeft(currentStock) {
    
}

// Will delete from shallow copy
function swipeRight(currentStock) {

}

// Retrieves the next stock that's available
// If the length of tempStocks is 0, return nothing --> call exception??
function getNextStock() {
    if (tempStocks.length === 0) {
        isEmpty = true;
    }
    if (isEmpty) {
        console.log("The tempStocks array is empty, call reset() to make a new stack");
        return;
    }
}

// Generates a random int number between min an max (inclusive)
/* geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/ */
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
