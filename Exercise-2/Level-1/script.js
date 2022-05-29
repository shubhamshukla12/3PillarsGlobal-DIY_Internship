// 1.
// let firstName = 'Alex';
let lastName = 'Finnch';
let country = 'Canada';
let age = '24';
let isMarried = true;
let year = 2020;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// 2.
var x = 10;
console.log(Boolean(typeof(x)));

// 3.
console.log(Boolean(parseInt(9.8) == 10));

// 4.
var x = 1;
let y = '200012155225';
//truthy statements.
console.log(Boolean([]));
console.log(Boolean(x));
console.log(Boolean(y));
var a;
//falsy statements
console.log(Boolean(a));
console.log(Boolean(false));
console.log(Boolean(0));

// 5.
var a = 4 > 3;
console.log(a);
var b = 4 >= 3;
console.log(b);
var c = 4 < 3;
console.log(c);
var d = 4 <= 3;
console.log(d);
var e = 4 == 4;
console.log(e);
var f = 4 === 4;
console.log(f);
var g = 4 != 4
console.log(g);
var h = 4 !== 4;
console.log(h);
var i = 4 != '4';
console.log(i);
var j = 4 == '4';
console.log(j);
var k = 4 === '4';
console.log(k);

// 6. 
var x = 4 > 3 && 10 < 12;
console.log(x);
var yx = 4 > 3 && 10 > 12;
console.log(yx);
var z = 4 > 3 || 10 < 12;
console.log(z);
var a = 4 > 3 || 10 > 12;
console.log(a);
var b = !(4 > 3);
console.log(b);
var c = !(4 < 3);
console.log(c);
var d = !(false);
console.log(d);
var e = !(4 > 3 && 10 < 12);
console.log(e);
var f = !(4 > 3 && 10 > 12)
console.log(f);
var g = !(4 === '4');
console.log(g);
var h = ['dragon', 'python'];
for(let i = 0 ; i < h.length ; i++) {
    console.log(Boolean(!(h[i].match('on'))));
}

// 7.
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
var date = new Date(1970, 1, 1, 00, 00, 00, 00);
var sec = Math.floor(date/1000);
console.log(sec);







