/**
 * 
 * @param {*} callback 
 */
function APITodayBasicAPPLData(callback) {
    axios.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=c5tho52ad3ifck7dg8fg')
        .then(response => {
            console.log(response.data);
            callback(response.data);
        })
        .catch(error => console.error(error));
}

/**
 * 
 */
function APIIntradayAPPLData(callback) {
    axios.get('https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=30&from=1631022248&to=1631627048&token=c5tho52ad3ifck7dg8fg')
        .then(response => {
            console.log(response.data);
            callback(response.data);
        })
        .catch(error => console.error(error));
}

function APITodayQuoteData(ticker, callback) {
    axios.get('https://finnhub.io/api/v1/quote?symbol=' + ticker + '&token=c5tho52ad3ifck7dg8fg')
        .then(response => {
            console.log(response.data);
            callback(response.data);
        })
        .catch(error => console.error(error));
}