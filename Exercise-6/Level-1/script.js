
// 1.
for(var i = 0 ; i < 11 ; i++) {
    document.write(i+"\n");
}
var j = 0;
while(j < 11) {
    document.write(j+"\n");
    j++;
}
var k = 0;
do {
    document.write(k+"\n");
    k++;
}
while(k < 11);

// 2.
for(var i = 10 ; i >= 0 ; i--) {
    document.write(i+"\n");
}
var j = 10;
while(j >= 0) {
    document.write(j+"\n");
    j--;
}
var k = 10;
do {
    document.write(k+"\n");
    k--;
}
while(k >= 0);

// 3.
var n = window.prompt("Enter a number: ");
for(let i = 0 ; i < n ; i++) {
        document.write(i+"\n");
}

// 4.
var n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str += "#";
    }
    str += "\n";
}
console.log(str);

// 5.
var product;
for(let i = 0 ; i < 11 ; i++) {
    product = i * i;
    console.log(i+" X "+i+" = "+product);
}

// 6.
var square, cube;
console.log("i"+"  \t  "+"i^2"+"  \t  "+"i^3");
for(let i = 0 ; i <= 10 ; i++) {
    square = i*i;
    cube = i*i*i;
    console.log(i+"  \t  "+square+"  \t  "+cube);
}

// 7.
for(let i = 0 ; i <= 100 ; i++) {
    if(i%2 == 0) console.log(i);
}

// 8.
for(let i = 0 ; i <= 100 ; i++) {
    if(i%2 != 0) console.log(i);
}

// 9.
for(let i = 1 ; i <= 100 ; i++) {
    var flag = 0;
    for(let j = 2 ; j < i ; j++) {
        if(i%j == 0) {
            flag = 1;
            break;
        }
    }
    if(flag == 0 && i > 1) console.log(i);
}

// 10.
let sum = 0;
for(let i = 0 ; i <= 100 ; i++) {
    sum = sum+i;
}
console.log("The sum from 0 to 100 is "+sum);

// 11.
var sumEven = 0;
var sumOdd = 0
for(let i = 0 ; i <= 100 ; i++) {
    if(i%2 == 0) sumEven = sumEven+i;
    else if(i%2 != 0) sumOdd = sumOdd+i;
}
console.log("The sum of all evens from 0 to 100 is "+sumEven+" And the sum of all odds from 0 to 100 is "+sumOdd+".");

// 12.
let sumEven = 0;
let sumOdd = 0
for(let i = 0 ; i <= 100 ; i++) {
    if(i%2 == 0) sumEven = sumEven+i;
    else if(i%2 != 0) sumOdd = sumOdd+i;
}
var arr = [];
arr.push(sumEven);
arr.push(sumOdd);
console.log(arr);

// 13.
let array = [];
for(let i = 1 ; i < 6 ; i++) {
    array.push(Math.floor(Math.random()*10));
}
console.log(array);

// 14.
var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

// 15.
let code = (Math.random()).toString(36).substring(7);
console.log(code);