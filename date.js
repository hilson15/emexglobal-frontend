// Get the current date
var dateUpdate = new Date();

// Format the date to a readable string
var formattedDate = dateUpdate.toDateString();

// Display the formatted date in the specified element
document.getElementById("dateUpdate").innerText = " " + formattedDate;