
var challenge;
challenge = "30 Days Of JavaScript\n";
var company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let sentence = "You cannot end a sentence with because because because is a conjunction";
let a = "30 Days Of";
let b = "JavaScript";

//1.
window.alert(challenge);
//2. 
console.log(challenge);
//3. 
console.log(challenge.length);
//4. 
window.alert(challenge.toUpperCase());
//5. 
window.alert(challenge.toLowerCase());
//6. 
window.alert(challenge.substring(2, 21));
//7. 
window.alert(challenge.includes('Script'));
//8. 
window.alert(challenge.substring(0, 2));
//9. 
window.alert(challenge.split(''));
//10. 
window.alert(challenge.split(' '));
//11. 
console.log(company.split(','));
//12. 
window.alert(challenge.replace("JavaScript", "Python"));
//13. 
console.log(challenge.charAt(15));
//14. 
console.log(challenge.charCodeAt("J"));
//15. 
console.log(challenge.indexOf('a'));
//16. 
console.log(challenge.lastIndexOf('a'));
//17. 
console.log(sentence.indexOf('because'));
//18. 
console.log(sentence.lastIndexOf('because'));
//19. 
console.log(sentence.search('because'));
//20. 
console.log(challenge.trim());
//21. 
console.log(challenge.startsWith('30'));
//22. 
console.log(challenge.endsWith('JavaScript'));
//23. 
console.log(challenge.match('a'));
//24. 
console.log(a.concat(" ", b));
//25. 
console.log(challenge.repeat(2));
