const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

let max=0,l=0,ans,loggedIn=0,points=0;
const mern = [];
for(const key of Object.keys(users))
{
    l = users[key].skills.length;
    if(l>max)
    {
        max=l;
        ans=key;
    }
    if(users[key].isLoggedIn)
        loggedIn++;
    if(users[key].points >= 50)
        points++;
    if((users[key].skills.includes('MongoDB')) && (users[key].skills.includes('Node')) &&
    (users[key].skills.includes('React')) && (users[key].skills.includes('Express')))
        mern.push(key);
}
console.log("User with most skills is "+ans);
console.log("Number of logged in users "+loggedIn);
console.log("Number of users with greater than or equal to 50 points "+points);
console.log("Mern stack developers: "+mern);

document.write("User with most skills is "+ans);
document.write(" \nNumber of logged in users "+loggedIn);
document.write(" \nNumber of users with greater than or equal to 50 points "+points);
document.write(" \nMern stack developers: "+mern);


// creating a new key which is an object
let Rohan = {
    email: 'rohan@rohan.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
}
// copying users object to new object without modifying the original users object
let copyUsers = Object.assign({}, users);
// setting new key in copied object 
copyUsers = {...copyUsers, Rohan};
console.log(copyUsers);

console.log(Object.keys(users));

console.log(Object.values(users));
 