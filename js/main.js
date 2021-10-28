


/***************************************************
 * Properties
 ***************************************************/




/***************************************************
 * Event Listener Functions
 ***************************************************/

// DOMContentLoaded
// Pull and initialize data for 
document.addEventListener("DOMContentLoaded", () => { 
    console.log("DOMContentLoaded test")

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
function handleSearchBtnClick(e) {
    console.log("searchBtn clicked!");
}

// Event Delegation Handler Function for WatchList Currency Buttons
function handleWatchListClick(e) {
    // e.target is the clicked element!
    // If it was a list item
    if(e.target && e.target.nodeName == "A") {
        // List item found!  Output the ID!
        console.log("A type item was clicked!");
        console.log(e.target);
    }
    else if (e.target && e.target.nodeName == "SPAN") {
        console.log("span type item was clicked!");
        console.log(e.target.parentElement);
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