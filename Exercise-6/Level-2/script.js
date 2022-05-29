// 1.
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}
console.log(makeid(window.prompt("Enter the length of the code")));

// 2.
let n = (Math.random() * 0xfffff * 1000000).toString(16);
console.log('#' + n.slice(0, 6));

// 3.
var randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
var r = randomBetween(0, 255);
var g = randomBetween(0, 255);
var b = randomBetween(0, 255);
console.log("rgb("+r+","+g+","+b+")");

// 4.
var countries = [
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
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    array.push(countries[i]);
} 
console.log(array);

// 5.
var countries = [
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
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    array.push(countries[i].length);
} 
console.log(array);

// 6.
var countries = [
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
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    let arr = [];
    arr.push(countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length);
    array.push(arr);
} 
console.log(array);

// 7.
var countries = [
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
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    if(countries[i].includes('land')) {
        array.push(countries[i]);
    }
}
if(array.length > 0) console.log(array);
else console.log("All these countries are without land.");

// 8.
var countries = [
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
var array = []
for(let i = 0 ; i < countries.length ; i++) {
    if(countries[i].endsWith('ia')) {
        array.push(countries[i]);
    }
}
if(array.length > 0) console.log(array);
else console.log("All these countries are without ia.");

// 9.
var countries = [
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
var max = countries[0].length;
    var ans = countries[0];
    for (var i = 1; i < countries.length; i++) {
        var max1 = countries[i].length;
        if (max1 > max) {
            ans = countries[i];
            max = max1;
        }
    }
console.log(ans);

// 10.
var countries = [
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
var array = [];
for(let i = 0 ; i < countries.length ; i++) {
    if(countries[i].length == 5) {
        array.push(countries[i]);
    }
}
console.log(array);

// 11.
var webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
var max = webTechs[0].length;
var ans = webTechs[0];
for (var i = 1; i < webTechs.length; i++) {
    var max1 = webTechs[i].length;
    if (max1 > max) {
        ans = webTechs[i];
        max = max1;
    }
}
console.log(ans);

// 12.
var webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
var array = []
for(let i = 0 ; i < webTechs.length ; i++) {
    let arr = [];
    arr.push(webTechs[i], webTechs[i].length);
    array.push(arr);
  } 
console.log(array);

// 13.
var mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = "";
for(let i = 0 ; i < mernStack.length ; i++) {
    acronym = acronym + mernStack[i].slice(0,1);
}
console.log(acronym);

// 14.
var list = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(let i = 0 ; i < list.length ; i++) console.log(list[i]);

// 15.
var fruit = ['banana', 'orange', 'mango', 'lemon'];
let arr = [];
for(let i = fruit.length-1; i >= 0 ; i--) {
    arr.push(fruit[i]);
}
console.log(arr);

// 16.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
for(var i in fullStack) {
    for(var j in fullStack[i]) {
        console.log(fullStack[i][j]);
    }
}