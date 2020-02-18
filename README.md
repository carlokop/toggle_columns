# toggle_columns
This class will toggle a single element to active in a multiple element row.

Usage:
Set active class to a single column an a row with multiple columns
For instance when clicked on that element. 

This requires a parent element with an row id and a classname for all toggleble elements in that row.
To initialize a addEventListener is required inside an for loop with an index number.

const activeClass = new activeClassToggle("servicesGalery","holder","active");
const holders = document.getElementById("servicesGalery").getElementsByClassName("holder");

for (let i=0; i < holders.length; i++) {
   holders[i].addEventListener("click", () => { 
        activeClass.setActive(activeClass.activeCol(),i) 
    });
}
