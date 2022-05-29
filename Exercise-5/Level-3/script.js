// 1.
var month = window.prompt("Enter month number: ");
var year = window.prompt("Enter any year: ");
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    document.write("Entered year is a leap year.");
}
else {
    document.write('Number of days in the given month is '+new Date(year, month, 0).getDate()+' days.');
}

// 2.
var month = window.prompt("Enter month number: ");
var year = window.prompt("Enter any year: ");
document.write('Number of days in the given month is '+new Date(year, month, 0).getDate()+' days.');