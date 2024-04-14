// Single Line Comment
/*Multi Line Comment*/


/***These are the commands or code to output result to the browser
 * document.write() method
 * alert() function
 * console.log() method
 */
document.write(100);
// alert(100); /*this alerts you on what the browser says*/
console.log(100);

/**Variables in js can be created using the following keywords
 * var - This allows the user to create/declare a variable that can be reassigned and recreated/redeclared.
 * let - This allows the user to create/declare a variable that can be reassigned but not be recreated/redeclared.
 * const - This means constant and makes the variable not reassignable or redeclarable.
 */

var num1; //declaration of variable
num1 = 100; //assignment of value to variable
var num2 = 200; //declaration and assignment of variable

let num3 = 10;
num3 = 20;
console.log(num3);
// let num3 = 50;

const num4 = 25;
// const num4 = 25; //You cannot redeclare/reassign with const

/**Variable Naming Convention
 * lowercase - eg: firstname
 * uppercase - eg: FIRSTNAME
 * pascalcase - eg: FirstName
 * camelcase - eg: firstName
 * snakecase - eg: first_name
 */