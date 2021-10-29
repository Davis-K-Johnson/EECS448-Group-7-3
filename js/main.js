


/***************************************************
 * Properties
 ***************************************************/

let currencyHL;
let currencies;

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
    updateGraphHeader();
    //currencyHL.setQuoteData();

    // Update UI Data
    //updateGraphHeader();
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
        console.log("Clicked Ticker element");
    }
}

// Event Listener Function for Add to WatchList Buttons
/**
 * handles a click on one of the "add to watchlist" buttons
 * @param {*} e 
 */
function handleToggleWatchListClick(e) {
    console.log("Clicked graph-list-status element");
}

/***************************************************
 * Highlighted Currency Functions
 ***************************************************/

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

/***************************************************
 * Watch List Functions
 ***************************************************/

// WatchListToggle Function

/***************************************************
 * Graphing Functions
 ***************************************************/

// Update Graph Function
function updateGraph() {
    
}

function updateGraphElements() {

}


/***************************************************
 * Search Bar Functions
 ***************************************************/

// SearchHandle Function