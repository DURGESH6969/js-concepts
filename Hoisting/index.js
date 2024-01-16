/* 
In JavaScript, hoisting allows you to use functions and variables before they're declared.
When the interpreter hoists a variable declared with var, it initializes its value to undefined. The first line of code below will output undefined:

*/

//console.log(x);  // output : undefined 

var x = 7;

/* Remember that the first console.log(x) outputs undefined because x is hoisted and given a default value (not because the variable is never declared). Using an undeclared variable will throw a ReferenceError instead:*/

//console.log(y); // output - ReferenceError: y is not defined

// Using an undeclared variable before its assignment will also throw a ReferenceError because no declaration was hoisted.

//console.log(callname);  // Uncaught ReferenceError: callname is not defined
//callname = 'raj';       // // Assigning a variable that's not declared is valid

// variable hoisting with let and const

/* 
Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or const variable before it's declared will result in a ReferenceError.


console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization

let foo = 'bar';  // Same behavior for variables declared with const.

Notice that the interpreter still hoists foo: the error message tells us the variable is initialized somewhere.

*/

// Function Hoisting
/* 
Function hoisting allows us to call a function before it is defined. 
Only Function declaration is hoisted i.e when we invoke a function declaration we can expect to execute it's normal behaviour
function expression and arrow function are not hoisted(techincally they are hoisted but the value set to undefined )
*/

// console.log(greeting) //logs entire greeting function code

// greeting("Durgesh"); // logs - hello Durgesh

// greeting() // logs hello undefined due to empty parameter

// function greeting(name){
//     console.log(`hello ${name} `);
// }


