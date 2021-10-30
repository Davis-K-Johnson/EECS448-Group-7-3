


/***************************************************
 * Properties
 ***************************************************/

let currencyHL;
let currencyWL1;
let currencyWL2;
let currencyWL3;
let currencyWL4;
let currencyWL5;
let currencies;
let BASE_WATCH_LIST = ["APPL", "AMZN", "TSLA", "TMUS", "TWTR"];

/***************************************************
 * Event Listener Functions
 ***************************************************/

// DOMContentLoaded
// Set up event listeners, then pull and initialize data for UI
document.addEventListener("DOMContentLoaded", () => { 
    console.log("DOMContentLoaded test")

    // Event Listener for Graph Buttons
    document.getElementById("day-btn").addEventListener("click", (e) => handle1DayBtnClick(e));
    document.getElementById("five-day-btn").addEventListener("click", (e) => handle5DayBtnClick(e));
    document.getElementById("month-btn").addEventListener("click", (e) => handle1MonthBtnClick(e));
    document.getElementById("three-month-btn").addEventListener("click", (e) => handle3MonthBtnClick(e));
    document.getElementById("six-month-btn").addEventListener("click", (e) => handle6MonthBtnClick(e));
    document.getElementById("year-btn").addEventListener("click", (e) => handle1YearBtnClick(e));

    // Event Listener for Search Bar Button
    document.getElementById("searchBtn").addEventListener("click", (e) => handleSearchBtnClick(e));
    document.getElementById("searchBar").addEventListener("keydown", (e) => {
        if (e.key == "Enter") { handleSearchBtnClick(e) }
    });

    // Event Delegation for Watch List UL elements
    document.getElementById("watch-list").addEventListener("click", (e) => handleWatchListClick(e));

    // Event Listener for Add/Remove from Watch List Button
    document.getElementById("graph-list-status").addEventListener("click", (e) => handleToggleWatchListClick(e));

    // Currency Objects
    currencyHL = new Currency("APPL");
    currencyWL1 = new Currency("AMZN");
    currencyWL2 = new Currency("APPL");
    currencyWL3 = new Currency("TSLA");
    currencyWL4 = new Currency("TMUS");
    currencyWL5 = new Currency("TWTR");
    updateCurrencyHLElements();
    currencies = BASE_WATCH_LIST.map(ticker => new Currency(ticker));
    //currencies.map(c => addToWatchList(c));

});

// Event Listener Function for 1 Day Button
/**
 * Handles a click on the 1 day button.
 * @param {*} e 
 */
function handle1DayBtnClick(e) {
    console.log("1Day btn clicked!");
}

// Event Listener Function for 5 Day Button
/**
 * Handles a click on the 5 day button.
 * @param {*} e 
 */
function handle5DayBtnClick(e) {
    console.log("5Day btn clicked!");
}

// Event Listener Function for 1 Month Button
/**
 * Handles a click on the 1 month button.
 * @param {*} e 
 */
function handle1MonthBtnClick(e) {
    console.log("1Month btn clicked!");
}

// Event Listener Function for 3 Month Button
/**
 * Handles a click on the 3 month button.
 * @param {*} e 
 */
function handle3MonthBtnClick(e) {
    console.log("3Month btn clicked!");
}

// Event Listener Function for 6 Month Button
/**
 * Handles a click on the 6 month button.
 * @param {*} e 
 */
function handle6MonthBtnClick(e) {
    console.log("6Month btn clicked!");
}

// Event Listener Function for 1 Year Button
/**
 * Handles a click on the 1 year button.
 * @param {*} e 
 */
function handle1YearBtnClick(e) {
    console.log("1Year btn clicked!");
}

// Event Listener Handler Function for Search Bar Button
/**
 * Handles a click on the search bar.
 * @param {*} e 
 */
function handleSearchBtnClick(e) {
    console.log("searchBtn clicked or searchBar keydown == Enter!");
    browse(AAPL);
}

// Event Delegation Handler Function for WatchList Currency Buttons
/**
 * Handles a click on the watch list.
 * @param {*} e 
 */
function handleWatchListClick(e) {
    let id;
    if(e.target && e.target.nodeName == "A")          { id = e.target.id; }
    else if (e.target && e.target.nodeName == "SPAN") { id = e.target.parentElement.id; }

    if (id) {
        console.log("Clicked " + id + " element");
    }
}

// Event Listener Function for Add to WatchList Buttons
/**
 * handles a click on one of the "add to watchlist" buttons
 * @param {*} e 
 */
function handleToggleWatchListClick(e) {
    console.log("Clicked graph-list-status element");
    currencyHL.ticker = "FB"
    addToWatchList(currencyHL);
}

/***************************************************
 * Highlighted Currency Functions
 ***************************************************/

function updateCurrencyHLElements() {
    updateGraphHeader();
    updateGraph();
    updateWatchList();
}

/***************************************************
 * Watch List Functions
 ***************************************************/

// WatchListToggle Function

// AddToWatchList Function
function addToWatchList(currency) {
    APITodayQuoteData(currency.getTicker(), function(data) {
        currency.setQuoteData(data);
        addWatchListElement(currency);
    });
}

function addWatchListElement(currency) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.id = currency.getTicker();
    a.href = "#";
    let spanSpace = document.createElement("span");
    let space = document.createTextNode("&ensp;");
    spanSpace.appendChild(space);
    let spanName = document.createElement("span");
    let name = document.createTextNode(currency.getTicker());
    spanName.className = "stock-name";
    spanName.appendChild(name);
    let spanPrice = document.createElement("span");
    let price = document.createTextNode(currency.getCurrentQuote());
    spanPrice.className = "stock-price";
    spanPrice.appendChild(price);
    let spanChangeUSD = document.createElement("span");
    let changeUSD = document.createTextNode(currency.getDayChange());
    spanChangeUSD.className = "stock-change-usd";
    spanChangeUSD.appendChild(changeUSD);
    let spanChangePercent = document.createElement("span");
    let changePercent = document.createTextNode(currency.getDayPercentChange());
    spanChangePercent.className = "stock-change-percent";
    spanChangePercent.appendChild(changePercent);
    let spanTimescale = document.createElement("span");
    let timescale = document.createTextNode("today");
    spanTimescale.className = "stock-timescale";
    spanTimescale.appendChild(timescale);
    a.appendChild(spanSpace);
    a.appendChild(spanName);
    a.appendChild(spanSpace);
    a.appendChild(spanPrice);
    a.appendChild(spanSpace);
    a.appendChild(spanChangeUSD);
    a.appendChild(spanSpace);
    a.appendChild(spanChangePercent);
    a.appendChild(spanSpace);
    a.appendChild(spanTimescale);
    li.appendChild(a);
    let watchlist = document.getElementById("watch-list");
    watchlist.appendChild(li);
}

function updateWatchList() {
    APITodayBasicAMZNData( function(data) {
        currencyWL1.setQuoteData(data);
        updateWatchListElements();
    });
    APITodayBasicAPPLData( function(data) {
        currencyWL2.setQuoteData(data);
        updateWatchListElements();
    });
    APITodayBasicTSLAData( function(data) {
        currencyWL3.setQuoteData(data);
        updateWatchListElements();
    });
    APITodayBasicTMUSData( function(data) {
        currencyWL4.setQuoteData(data);
        updateWatchListElements();
    });
    APITodayBasicTWTRData( function(data) {
        currencyWL5.setQuoteData(data);
        updateWatchListElements();
    });
}

function updateWatchListElements() {
    document.getElementById("watch1-name").innerText = currencyWL1.getTicker();
    document.getElementById("watch1-price").innerText = currencyWL1.getCurrentQuote();
    document.getElementById("watch1-change-usd").innerText = currencyWL1.getDayChange();
    document.getElementById("watch1-change-percent").innerText = currencyWL1.getDayPercentChange();

    document.getElementById("watch2-name").innerText = currencyWL2.getTicker();
    document.getElementById("watch2-price").innerText = currencyWL2.getCurrentQuote();
    document.getElementById("watch2-change-usd").innerText = currencyWL2.getDayChange();
    document.getElementById("watch2-change-percent").innerText = currencyWL2.getDayPercentChange();

    document.getElementById("watch3-name").innerText = currencyWL3.getTicker();
    document.getElementById("watch3-price").innerText = currencyWL3.getCurrentQuote();
    document.getElementById("watch3-change-usd").innerText = currencyWL3.getDayChange();
    document.getElementById("watch3-change-percent").innerText = currencyWL3.getDayPercentChange();

    document.getElementById("watch4-name").innerText = currencyWL4.getTicker();
    document.getElementById("watch4-price").innerText = currencyWL4.getCurrentQuote();
    document.getElementById("watch4-change-usd").innerText = currencyWL4.getDayChange();
    document.getElementById("watch4-change-percent").innerText = currencyWL4.getDayPercentChange();

    document.getElementById("watch5-name").innerText = currencyWL5.getTicker();
    document.getElementById("watch5-price").innerText = currencyWL5.getCurrentQuote();
    document.getElementById("watch5-change-usd").innerText = currencyWL5.getDayChange();
    document.getElementById("watch5-change-percent").innerText = currencyWL5.getDayPercentChange();
}

// RemoveWatchListElement Function

/***************************************************
 * Graph Section Functions
 ***************************************************/

// Update Graph Header Function
function updateGraphHeader() {
    APITodayBasicAPPLData( function(data) {
        currencyHL.setQuoteData(data);
        updateGraphHeaderElements();
    });
}

function updateGraphHeaderElements() {
    document.getElementById("graph-stock-name").innerText = currencyHL.getTicker();
    document.getElementById("graph-price").innerText = currencyHL.getCurrentQuote();
    document.getElementById("graph-change-usd").innerText = currencyHL.getDayChange();
    document.getElementById("graph-change-percent").innerText = currencyHL.getDayPercentChange();
}

// Update Graph Function
function updateGraph() {
    APIIntradayAPPLData( function(data) {
        currencyHL.setOneDayTimeSeriesData(data);
        console.log("updateGraph function!");
        console.log(currencyHL.getOneDayTimeSeriesData());
        updateGraphElements();
    })
}

function updateGraphElements() {
    var ctx = document.getElementById("graph-canvas").getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'line',
        options: {
            scales: {
            xAxes: [{
                type: 'time',
            }]
            }
        },
        data: currencyHL.getOneDayTimeSeriesData()
    });
}


/***************************************************
 * Search Bar Functions
 ***************************************************/

// SearchHandle Function