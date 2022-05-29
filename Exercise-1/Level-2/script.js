

// 1. 
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.  
console.log('"'+"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."+'"')

// 3. 
x = typeof(10);
console.log(x == 10)
x = 10;
console.log(x)

// 4. 
x = parseFloat(9.8);
console.log(x);
console.log(Math.ceil(x));

// 5. 
x = ["python", "jargon"];
for(let i = 0 ; i < x.length ; i++){
    if(x[i].match("on")) console.log(true);
    else console.log(false);
}

// 6. 
x = "I hope this course is not full of jargon."
if(x.match("jargon")) console.log(true);
else console.log(false);

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}
// 7. 
console.log(random(0,100));
// 8. 
console.log(random(50,100));
// 9. 
console.log(random(0,255));

// 10. 
str = 'JavaScript';
console.log(Math.random(str).toString(5).slice(2));

// 11. 
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125");

// 12. 
str = "You cannot end a sentence with because because because is a conjunction"
arr = str.split(" ");
list = arr.slice(6,9);
console.log(list.join(" "));