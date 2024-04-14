/**Data type in JavaScript
 * number 
 * bigint
 * string
 * null
 * undefined
 * boolean
 * object
 * symbol
 */

// Number data type
let age = 21;
console.log(typeof age);
let pi = 3.14;
console.log(typeof pi);
let ans = age + pi;
console.log(ans);
let a = 20;
let b = 10;
let c = a + b;
console.log(c);
c = c + 30;
console.log(c);

// Bigint data type
let bigNum = BigInt(4);
let bigNum2 = 4n; //Another way of representing bigint

// String data type
//NB: Any value within a quotation is a string
let name = "john doe";
let clas = "300"; //This is a string
console.log(typeof clas)
let sentence = "Mary's father has a dog";
console.log(sentence);
let firstname = "John";
let lastname = "Doe";
let fullname = firstname + " " + lastname; //Concatination is the term used to refer to joining two strings together. The (+ " " +) is to add space between the names to protect yourself from hackers or dumb users. ANother way to add space b/w the first and last name is to add space while typing the name eg "John " or " Doe"
console.log(fullname);

//String Properties and Methods
// .length property
let str = "hello world"; //space is a character
console.log(str.length);
// Concat Method
console.log(firstname.concat(" ", lastname));
console.log(str.startsWith("he"));
console.log(str.endsWith("ld"));
console.log(str.toUpperCase());
// console.log(str.includes(world));