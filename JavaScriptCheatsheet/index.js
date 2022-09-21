// Common JavaScript Data Types
console.log(typeof 'String'); // prints 'string'
console.log(typeof 90); // prints number
console.log(typeof true); // prints boolean

let list = [1, 2, 3, 5] 
console.log(typeof list) // prints object


// JavaScript Variables
const userName = 'Daisy';
let color = 'blue';
var food = 'rice';

console.log(userName) // prints 'Daisy' on the terminal


// Operators(Arithmetic, Comparison & Logical)
// 1. Mathematical Operators(+, -, *, /) 
    console.log(3+4); // prints 7
    console.log(7*2); // prints 14
    console.log(9/3); // prints 3
    console.log(90-50); // prints 40

// 2. Comparison Operators
   // Equality Operators (<, >, =<, =>)
    let theNumber = 5; 
    if (theNumber === 4) {
        console.log('I am 4');
    } else {
        console.log('I am not 4')
    } //checks if value assigned to variable called thisNumber, is strictly equal to 4


   // Relational Operators(===, ==, !==, !=)
   if (theNumber >= 10 ) {
    console.log(' I am greater than 10')
   }  else {
    console.log('I am less than 10')
   }

// 3. Logical Operators(&&, || , !)
    let day = 'weekend'
    let time = 'evening' // variable declaration to be used below;
   
    // a. The AND (&&)
    if (day === 'weekend' && time === 'noon') {
        console.log('Swim')
    } else {
        console.log('Jog today!')
    }

    // b. The OR (||)
    if (day === 'weekend' || time === 'noon'){
        console.log('Take Nap!')
    }
   


// Conditional Statements
   // Selection Conditional (if, if... else, else if ...)
   let number = 5;
   if (number <= 10) {
    console.log('I am less than 5')
   } else {
    console.log('I am more than 5')
   }

   // Looping (for, while, do... while)
   let counter = 3;
   while (counter <= 5){
    console.log(`I am less than 5 `);
    counter ++;
   } // Prints 'I am less than 5' four times


// Functions
   function doMultiplication (num1, num2) {
    return num1*num2
    }

   console.log(doMultiplication(5,4)); // prints 20 on the terminal
