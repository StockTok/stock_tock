const { Console } = require('console');
let fs = require('fs') //filesystem

const followedStocks = []; // -----> TODO: Need to read from user's file from account_info to obtain what they followed and whatnot
const stocksSwipedLeft = []; // Isn't that kind of the same thing as followed stocks?
const stocks = ['aapl', 'msft', 'amzn', 'fb', 'googl', 'tsla', 'goog', 'brk.b', 'jnj', 'jpm', 'nvda', 'v', 'dis', 'pypl', 'pg', 
'unh', 'ma', 'hd', 'bac', 'intc', 'nflx', 'cmcsa', 'adbe', 'vz', 'abt', 'crm', 'xom', 't', 'csco', 'wmt', 'tmo', 'ko', 'avgo', 
'pfe', 'mrk', 'pep', 'abbv', 'nke', 'cvx', 'qcom', 'txn', 'nee', 'acn', 'lly', 'mdt', 'mcd', 'cost', 'dhr', 'hon', 'unp', 'amgn', 
'bmy', 'wfc', 'pm', 'lin', 'c', 'low', 'sbux', 'orcl', 'ups', 'now', 'ba', 'amd', 'rtx', 'cat', 'ibm', 'intu', 'ms', 'gs', 'amat',
'blk', 'mmm', 'amt', 'ge', 'de', 'cvs', 'mu', 'tgt', 'isrg', 'chtr', 'gild', 'fis', 'axp', 'lmt', 'schw', 'tjx', 'lrcx', 'spgi',
'mo', 'syk', 'atvi', 'pld', 'mdlz', 'zts', 'ci', 'cb', 'bdx', 'antm', 'tmus'];

//const stocks = ['aapl', 'tmus', 'potato'];

let tempStocks; // A list of stocks that the user will go through, will copy from currentListStocks
let currentStock;

/* --------- Debug (Like main() function in Java or something---------------- */
/* __________________________________________________________________________*/
/* __________________________________________________________________________*/

start(); // Always call start() function


// USER INPUT/ACTIONS--------------------------------------

/* Let's see what happens :) */

// This is what happens when you swipe all right
let i;
for (i = 0; i < stocks.length; i++) {
    console.log("for loop iteration " + (i + 1));
    swipeRight(currentStock);
}



// swipeLeft(currentStock);
// swipeLeft(currentStock);
// swipeRight(currentStock);
// swipeRight(currentStock);

// reset();

// swipeLeft(currentStock);

// end USER INPUT/ACTIONS--------------------------------------


console.log(
`current stock: ${currentStock}
tempStocks length: ${tempStocks.length}
followedStocks: [${followedStocks}]`
);

/* __________________________________________________________________________*/
/* __________________________________________________________________________*/
                /* --------- Debug end ----------- */



// ALWAYS CALL THIS FUNCTION FIRST
/* TODO: Parse through user data and see what they've saved --> Then update currentListStocks
    For now I used the original list of stocks to simulate user data
    Probably should use currentListStocks and followedStocks as saved data in a user account
*/
function start() {
    tempStocks = [...stocks];
    currentStock = stocks[randomNumber(0, stocks.length - 1)];

}

// Resets the stack, basically it creates a shallow copy of the stocks list
function reset() {
    console.log("\n---reset has been called---\n");
    tempStocks = [...stocks];
    getNextStock();
}

// Obtains the currentStock -- Debugging
function getCurrentStock() {
    console.log(currentStock);
}

// Will add stock to followedStocks array
// Will also delete from shallow copy
function swipeLeft(currentStock) {
    if (followedStocks.length === stocks.length) {
        console.log("You've liked everything, there's nothing to see/do here");
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
function swipeRight(currentStock) {

    if (followedStocks.length === stocks.length) {
        console.log("You've liked everything, there's nothing to see/do here");
        return;
    }

    console.log("----Swiped right on: " + currentStock);

    let index = tempStocks.indexOf(currentStock);
    tempStocks.splice(index, 1);
    getNextStock();

}

// Retrieves the next stock that's available
// If the length of tempStocks is 0, FOR NOW I'll just call reset()
// TODO: If the length of the currentListStocks is 0, then that means the user had already followed every one of the stocks
function getNextStock() {
    if (followedStocks.length === stocks.length) {
        console.log("You followed all stocks, there's nothing to reset");
        return;
    }
    // Miiight need to put reset in the swipe functions
    else if (tempStocksIsEmpty()) {
        console.log("You have reached the end, reset() to restart stack");
        currentStock = null;
        return;
    }

    let foundNext = false;
    let suggestedStock;
    while (foundNext === false) {
        suggestedStock = stocks[randomNumber(0, stocks.length - 1)];

        // If the suggestedStock is already being followed, continue on to the next stock
        if (followedStocks.includes(suggestedStock)) {
            continue;
        }

        // If the suggestedStock is a repeat of the currentStock, search for another
        if (suggestedStock.localeCompare(currentStock) === 0 && tempStocks > 1) {
            console.log("Searching for a different one")
            continue;
        }

        // Reassign currentStock and set foundNext to true
        currentStock = suggestedStock;
        foundNext = true;
        

    }

}

// Chekcs if the tempStock is empty
function tempStocksIsEmpty() {
    if (tempStocks.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

// Not implemented yet, but maybe this will be called before the user closes the app or update it every time they swipe left
function saveData() {
    return;
}


// Generates a random int number between min an max (inclusive)
/* geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/ */
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
