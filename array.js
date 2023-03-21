// check array, check array elements , add two array (concat)

// every data type checking by indexOf but only array checking by array.isArray ()diye 

const myName = 'Amzad Hossain';
const myAge = 23;
const isSingle = true;
const myFriends = ['adnan', 'hasan', 'hasib', 'ahir', 'abir'];
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isSingle);
console.log(Array.isArray(myFriends));

// checking array elemnt 

console.log(myFriends.includes('hasan'));

// concating array 

const myNewFriends = ['jack', 'danial', 'rudro', 'karim'];
const myAllFriends = myFriends.concat(myNewFriends);
console.log(myAllFriends);