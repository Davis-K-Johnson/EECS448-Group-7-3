


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
    getTodayBasicAPPLData();
    getIntradayAPPLData();

    // Event Listener for Search Bar Button
    document.getElementById("searchBtn").addEventListener("click", (e) => handleSearchBtnClick(e));
    document.getElementById("searchBar").addEventListener("keydown", (e) => {
        if (e.key == "Enter") { handleSearchBtnClick(e) }
    });

    // Event Delegation for Watch List UL element
    document.getElementById("watch-list").addEventListener("click", (e) => handleWatchListClick(e));
});

// Event Listener Function for 1 Day Button

// Event Listener Function for 5 Day Button

// Event Listener Function for 1 Month Button

// Event Listener Function for 3 Month Button

// Event Listener Function for 6 Month Button

// Event Listener Function for 1 Year Button

// Event Listener Handler Function for Search Bar Button
/**
 * Handles the effects of clicking on the search bar.
 * @param {*} e 
 */
function handleSearchBtnClick(e) {
    console.log("searchBtn clicked or searchBar keydown == Enter!");
}

// Event Delegation Handler Function for WatchList Currency Buttons
/**
 * Handles the effects of clicking on the watch list.
 * @param {*} e 
 */
function handleWatchListClick(e) {
    let id;
    if(e.target && e.target.nodeName == "A")          { id = e.target.id; }
    else if (e.target && e.target.nodeName == "SPAN") { id = e.target.parentElement.id; }
    else if (e.target && e.target.nodeName == "I")    { id = e.target.parentElement.id; }

    if (id) {
        if (id == "AddToWatchListBtn") {
            console.log("Clicked AddToWatchListBtn element");
        }
        else {
            console.log("Clicked Ticker element");
        }
    }
}

// Event Listener Function for Add to WatchList Buttons

/***************************************************
 * Watch List Functions
 ***************************************************/

// WatchListToggle Function

/***************************************************
 * Graphing Functions
 ***************************************************/

// Create Graph Function

// Populate Graph Function

/***************************************************
 * Search Bar Functions
 ***************************************************/

// SearchHandle Function