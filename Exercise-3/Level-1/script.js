// 1.
var empty = [];
console.log(empty);

// 2. & 3.
var array = [0,1,2,3,4,5,6,7];
console.log(array.length);

// 4.
var array1 = [0,1,2,3,4,5,6];
console.log(array1[0], array1[Math.floor((array1.length)/2)], array1[array1.length-1]);

// 5.
var mixedDataTypes = [1, 'Raj', '2', 55, 'seven', 0];
console.log(mixedDataTypes.length);

// 6.
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7.
console.log(itCompanies);

// 8.
console.log(itCompanies.length);

// 9.
console.log(itCompanies[0], itCompanies[Math.floor((itCompanies.length)/2)], itCompanies[itCompanies.length-1]);

// 10.
for(let i = 0 ; i < itCompanies.length ; i++) {
    console.log(itCompanies[i]+"\n");
}

// 11.
for(let i = 0 ; i < itCompanies.length ; i++) {
        console.log(itCompanies[i].toUpperCase());
    }

// 12.
console.log(itCompanies.join(", ")+" are big IT companies.");

// 13.
var company = window.prompt("Enter the name of the company :");
if(itCompanies.includes(company)) console.log(company);
else console.log(company+' is Not found.');

// 14.

// 15.
console.log(itCompanies.sort());

// 16.
console.log(itCompanies.reverse());

// 17.
console.log(itCompanies.slice(3,itCompanies.length));

// 18.
console.log(itCompanies.slice(0,itCompanies.length-3));

// 19.
console.log(itCompanies.slice(Math.floor(itCompanies.length/2), (Math.floor(itCompanies.length/2))+1));

// 20. 
itCompanies.shift();
console.log(itCompanies);

// 21.
delete itCompanies[Math.floor(itCompanies.length/2)];
console.log(itCompanies);

// 22.
itCompanies.pop();
console.log(itCompanies);

// 23.
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
