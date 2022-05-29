//1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// (i)
sortAges = ages.sort();
console.log(sortAges);
console.log("Min Age: "+sortAges[0]+"\n"+"Max Age: "+sortAges[sortAges.length-1]);
// (ii)
var n = ages.length;
let sorted = ages.sort();
if(n % 2 != 0) {
    console.log(sorted[Math.floor(n/2)]);
}
else if(n % 2 == 0) {
    console.log(sorted[Math.floor(n/2)], sorted[Math.floor(n/2)+1]);
}
//(iii)
let sum = 0;
for(let i = 0 ; i < ages.length ; i++) {
    sum = sum + ages[i];
}
let average = sum / ages.length;
console.log(average);
// (iv)
let range = sortAges[sortAges.length-1] - sortAges[0];
console.log(range);

// 2.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
console.log(countries.slice(0,10));

// 3.
var n = countries.length;
if(n % 2 != 0) {
    console.log(countries[Math.floor(n/2)]);
}
else if(n % 2 == 0) {
    console.log(countries[Math.floor(n/2)], countries[Math.floor(n/2)+1]);
}

// 4.
let len = countries.length;
if(len % 2 == 0) {
    let first = countries.slice(0, len/2 );
    console.log(first);
    let second = countries.slice(len/2 , len);
    console.log(second);
}
else if(len % 2 != 0) {
    let first = countries.slice(0, len/2 + 1);
    console.log(first);
    let second = countries.slice(len/2 + 1, len);
    console.log(second);
}