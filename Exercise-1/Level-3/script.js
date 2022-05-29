
// 1. 
str = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(str.split('love').length);

// 2. 
str = 'You cannot end a sentence with because because because is a conjunction.';
console.log((str.match(/because/g) || []).length);

// 3.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
str = sentence.replace("&", "");
console.log(str);

// 4. 
const str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const arr  = str.match(/\d+/g);
const Income = (+arr[0] + +arr[2]) * 12 + +arr[1];
console.log(Income);