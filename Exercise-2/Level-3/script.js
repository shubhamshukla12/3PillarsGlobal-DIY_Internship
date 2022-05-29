var now = new Date();
var year = now.getFullYear() // return year
var month = now.getMonth() + 1 // return month(0 - 11)
var date = now.getDate() // return date (1 - 31)
var hours = now.getHours() // return number (0 - 23)
var minutes = now.getMinutes() // return number (0 -59)

if(hours<10) {hours = '0'+hours};
if(minutes<10) {minutes = '0'+minutes};
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);