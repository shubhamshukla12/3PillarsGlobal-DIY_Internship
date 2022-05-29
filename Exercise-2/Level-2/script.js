// 1.
var base = window.prompt("Enter base :");
var height = window.prompt("Enter height :");
var area = 0.5 * base * height;
document.write(area);

// 2.
var side1 = window.prompt("Enter side 1 :"); 
var side2 = window.prompt("Enter side 2 :");
var side3 = window.prompt("Enter side 3 :");
var perimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3));
console.log(perimeter);

// 3.
var side1 = window.prompt("Enter side1");
var side2 = window.prompt("Enter side2");
var area = (side1 * side2);
var perimeter = (parseInt(side1) + parseInt(side2));
console.log(area);
console.log(perimeter);

// 4.
var radius = window.prompt("Enter radius :");
const pi = 3.14;
var area = (pi * radius * radius);
var circumference = (2 * pi * radius);
console.log(area);
console.log(circumference);

// 6.
var x1 = 2;
var x2 = 6;
var y1 = 2;
var y2 = 10;

var m = (y2-y1)/(x2-x1);
console.log(m);

//9.
var hrs = window.prompt("Enter hours :");
var rate = window.prompt("Enter rates per hours :");
var earning = hrs*rate;
window.alert(earning);

// 10.
const sname = window.prompt("Enter your name :");
if(sname.length > 7) window.alert("Name too long");
else window.alert("Name is short");

// 11.
let fname = window.prompt("Enter your first name :");
let lname = window.prompt("Enter your last name :");
if(fname.length > lname.length) window.alert("Your first name, "+fname+" is longer than your family name, "+lname);
else window.alert("Your family name, "+lname+" is longer than your first name, "+fname);

// 12.
let myAge = "40";
let yourAge = "22";
document.write("I am "+(myAge-yourAge)+" years older than you.")

// 13.
let years1 = window.prompt("Enter the year of birth :");
let now1 = new Date().getFullYear();
if(now1-years1 >= 18) document.write("You are "+(now1-years1)+" years old. You are old enough to drive.");
else document.write("You are "+(now1-years1)+" years old. You are allowed to drive after "+(18 - (now1-years1))+" years.");

// 14.
let years = window.prompt("Enter the year you live :");
let sec = years*365*24*60*60;
document.write(sec);

// 15(i).
var now = new Date();
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

// 15(ii).
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);

// 15(iii).
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
