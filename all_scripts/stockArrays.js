let fs = require('fs') //filesystem

const followedStocks = [];
const stocksSwipedLeft = [];
const stocks = ['aapl', 'msft', 'amzn', 'fb', 'googl', 'tsla', 'goog', 'brk.b', 'jnj', 'jpm', 'nvda', 'v', 'dis', 'pypl', 'pg', 
'unh', 'ma', 'hd', 'bac', 'intc', 'nflx', 'cmcsa', 'adbe', 'vz', 'abt', 'crm', 'xom', 't', 'csco', 'wmt', 'tmo', 'ko', 'avgo', 
'pfe', 'mrk', 'pep', 'abbv', 'nke', 'cvx', 'qcom', 'txn', 'nee', 'acn', 'lly', 'mdt', 'mcd', 'cost', 'dhr', 'hon', 'unp', 'amgn', 
'bmy', 'wfc', 'pm', 'lin', 'c', 'low', 'sbux', 'orcl', 'ups', 'now', 'ba', 'amd', 'rtx', 'cat', 'ibm', 'intu', 'ms', 'gs', 'amat',
'blk', 'mmm', 'amt', 'ge', 'de', 'cvs', 'mu', 'tgt', 'isrg', 'chtr', 'gild', 'fis', 'axp', 'lmt', 'schw', 'tjx', 'lrcx', 'spgi',
'mo', 'syk', 'atvi', 'pld', 'mdlz', 'zts', 'ci', 'cb', 'bdx', 'antm', 'tmus'];

let tempStocks;


reset();


// Resets the stack, basically it creates a shallow copy of the stocks list
function reset() {
    tempStocks = [...stocks];
}

// Will add stock to followedStocks array
// Will also delete from shallow copy
function swipeLeft() {
    
}

// Will delete from shallow copy
function swipeRight() {

}
