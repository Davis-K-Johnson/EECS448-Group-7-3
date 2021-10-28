


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

    // Event Delegation for Watch List UL element
    document.getElementById("watch-list").addEventListener("click", (e) => handleWatchListClick(e));
});

// Event Listener Function for 1 Day Button

// Event Listener Function for 5 Day Button

// Event Listener Function for 1 Month Button

// Event Listener Function for 3 Month Button

// Event Listener Function for 6 Month Button

// Event Listener Function for 1 Year Button

// Event Listener Function for Search Bar Button

// Event Listener Function for WatchList Currency Buttons
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