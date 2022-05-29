// 1.
let years1 = window.prompt("Enter your age :");
let now1 = new Date().getFullYear();
if(years1 >= 18) document.write("You are "+(years1)+" years old. You are old enough to drive.");
else document.write("You are "+(years1)+" years old. You are allowed to drive after "+(18 - (years1))+" years.");

// 2. 
let myAge = window.prompt("My Age:");
let yourAge = window.prompt("Your Age");
if(myAge > yourAge) document.write("I am "+(myAge-yourAge)+" years older than you.");
else document.write("I am "+(yourAge-myAge)+" years younger than you.");

// 3.
let a = 4;
let b = 3;
if(a > b) document.write('a is greater than b');
else document.write('b is greater than a');
(a > b) ? document.write('a is greater than b') : document.write('b is greater than a');

// 4.
let num = window.prompt("Enter a number :");
if(num % 2 == 0) document.write(num + " is even number.")
else document.write(num + " is odd number");