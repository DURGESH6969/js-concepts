// map() method 

// example -1

// const arr = [2,4,1,3,9];
// const output = arr.map((num)=> 2 * num)
// console.log(output);

// example -2

// const languages = ["java", "ruby", "cpp", "c", "javascript"]
// const prog = languages.map( (lan) => lan+": programming language")
// console.log(prog);

// map( ) method's general syntax is map(callback,thisArg) here thisArg is optional

/*
callbackFn:

A function to execute for each element in the array. Its return value is added as a single element in the new array. 
The function is called with the following arguments:

element:
The current element being processed in the array.

index:
The index of the current element being processed in the array.

array:
The array map() was called upon.

*/

// example -3 

// const friends = [ "deven", "ayush", "anurag", "sayantan", "dheeraj", "rishu", "ankit"];
// const oddFriends = friends.map((el,idx,arr)=> (idx % 2 ? el : undefined))

// console.log(oddFriends);

// filter method
/*
The filter() method takes an array and returns a new array with only the values that meet certain criteria.
It also does not mutate the original array. It is often used to select a subset of data from an array based on certain criteria.
*/

function lenGreaterThanFour(val)
{
    if(val.length>4)
    return val;
}

const names = ["rohan", "juan", "carlos", "andrew"];
const fullName = names.filter(lenGreaterThanFour)
console.log(fullName);

// example 2:

// const people = [
//     { name: 'Alice', age: 25, profession: 'Engineer' },
//     { name: 'Bob', age: 17, profession: 'Student' },
//     { name: 'Charlie', age: 30, profession: 'Doctor' },
//     { name: 'David', age: 22, profession: 'Engineer' },
// ];

// const adultEngineers = people.filter(person => {
//     return person.age >= 18 && person.profession === 'Engineer';
// });

// console.log(adultEngineers);


