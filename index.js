// // ************** CHAPTER NO.5 ******************* 
// ************** MATH EXPRESSION *****************
// ************** QUESTION NO.1 ******************* 

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// ************** ANSWER NO.1 ******************* 

// let add1 = 3
// let add2 = 5
// document.writeln(add1 + add2)

// // ************** QUESTION NO.2 ******************* 

//2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// ************** ANSWER NO.2 ******************* 

// document.writeln(add1 - add2)
// document.writeln(add1 * add2)
// document.writeln(add1 / add2)

// ************** QUESTION NO.3 ******************* 

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

// ************** ANSWER NO.3 ******************* 

// let number = 20

// let square = number * number
// let half = number / 2
// let increment = number +1
// let decrement = number -1

// ************** QUESTION NO.4 ******************* 

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// ************** ANSWER NO.4 ******************* 

// let ticket = 600
// document.writeln(ticket * 5)

// let usd = 10 
// let sur = 25

// let totalPKR =(usd * 104.80 + sur * 28)
 
// document.writeln("total in pakistani rupees", +totalPKR)

// let totalmarks = 500
// let obtainedmarks = 420

// let percentage = (obtainedmarks / totalmarks) * 100
// document.writeln("total marks :",980) <br>
// document.writeln('obtained marks :',804) 
// document.writeln(percentage,"%")

// ************** QUESTION NO.7 ******************* 

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// Page 5 of 9

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// ************** ANSWER NO.7 ******************* 

// let priceofitem1 = 650
// let quantityofitem1 = 3
// let priceofitem2 = 100“
// let quantityofitem2 = 7
// let shippingcharges = 100

// let totalitem1 = priceofitem1 * quantityofitem1
// let totalitem2 = priceofitem2 * quantityofitem2
 
// let totalcost = totalitem1 + totalitem2 + shippingcharges
// document.write('Total cost of order:',totalcost)



// ************** QUESTION NO.10 ******************* 

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// ************** ANSWER NO.10 ******************* 

// let num = 6
// let result = ((num + 5) * 10) / 2
// document.write(result)

// ************** QUESTION NO.11 ******************* 

// let currentyear = 2025
// let birthyear = 1994

// ************** ANSWER NO.11 ******************* 

// let agecalcalculate = currentyear - birthyear
// document.writeln(agecalcalculate)

// ************** QUESTION NO.13 *******************

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: You will need
// NNNN to last you until the ripe old age of NN”.

// ************** ANSWER NO.13 ******************* 

// 'favorite snack: busciut'
// let currentage = 30
// let maxage = 70
// let estimatedamount = 10

// let willeat = 70 * 10
// let untileat = 30 * 10
 
// document.writeln('You will need =',willeat)
// document.writeln('last you until the ripe old age  =',untileat)

// // ************** CHAPTER NO.9 ******************* 
// // ************** MATH EXPRESSION ******************* 
// // ************** QUESTION NO.1 ******************* 

// // 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// // ************** QUESTION NO.2 ******************* 

// 2. What will be the output in variables a, b & result after
// execution of the following script:

// var a = 2, b =1;
// var result = --a - --b + ++b + b--;
// console.log(result)

// // ************** QUESTION NO.3 ******************* 


//3. Write a program that takes input a name from user &
// greet the user.

// let username = prompt("what is your name?")
// alert("Nice to meet you")

// // ************** CHAPTER NO.14 - 16 ******************* 
// // ************** ARRAYS ******************* 
// // ************** QUESTION NO.1 ******************* 

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// JS literal notation //
// var studentNamesLiteral = [];
// document.writeln(studentNamesLiteral)

// // JS object notation //
// var studentNamesObject = new Array();
// document.writeln(studentNamesObject)

// // strings array //
// var stringArray = ["Ali", "Sara", "John"];
// document.writeln(stringArray)

// // numbers array //
// var numberArray = [10, 20, 30, 40];
// document.writeln(numberArray)

// // booleanArray //
// var booleanArray = [true, false, true];
// document.writeln(booleanArray)

// //  mixed array //
// var mixedArray = ["Hello", 42, true, null];
// document.writeln(mixedArray)

// // array of education qualifications //
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.writeln(educationQualifications)

// // ************** QUESTION NO.8 ******************* //

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentNames = ["Ali", "Bilal", "kamran"];

// let studentScores = [450, 350, 400];

// let totalMarks = 500;

// for(let i = 0; i < studentNames.length; i++){
//     let name = studentNames[i];
//     let score = studentScores[i];
//     let percentage = (score / totalMarks) * 100;

//     console.log(`Student: ${name}`);
//     console.log(`Score: ${score}/${totalMarks}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
// }

// // ************** QUESTION NO.10 ******************* //

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let studentScores = [200, 280, 100, 300, 50, 95, 88];

// studentScores.sort(function(a, b) {
//     return a - b; 
//   });

//   console.log(studentScores);

// // ************** QUESTION NO.11 ******************* //

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cities = ["ISLAMABAD", "KARACHI", "LAHORE", "PESHAWER", "QUETTA"];

// let selectedCities = cities.slice(0, 3);

// console.log("All Cities:", cities);
// console.log("Selected Cities:", selectedCities);

// // ************** QUESTION NO.12 ******************* //

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ['This','is','my','car']
// let result = arr.join('');
// console.log(result)

// // ************** QUESTION NO.13 ******************* //

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// // ************** ANSWER NO.13 ******************* //

// let fifo = [];

// fifo.push("keyboard");
// fifo.push("mouse");
// fifo.push("printer");

// console.log(fifo.shift()); 
// console.log(fifo.shift()); 
// console.log(fifo.shift()); 

// // ************** QUESTION NO.14 ******************* //

// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// // ************** ANSWER NO.14 ******************* //

// let lifo = []

// lifo.push('printer')
// lifo.push('mouse')
// lifo.push('keyboard')

// console.log(lifo.pop())
// console.log(lifo.pop())
// console.log(lifo.pop())

// // ************** CHAPTER NO.17 - 20 ******************* 
// // ************** ARRAYS AND LOOPS ******************* //
// // ************** QUESTION NO.1 ******************* //

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// // ************** ANSWER NO.1 ******************* //

// let array =[]

// array.push([1,2])
// array.push([3,4])

// console.log(array)

// // ************** QUESTION NO.2 ******************* //

// Declare and initialize a multidimensional array
// representing the following matrix:

// // ************** ANSWER NO.2 ******************* //

// let matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// console.log(matrix)

// // ************** QUESTION NO.3 ******************* //

// 3. Write a program to print numeric counting from 1 to 10.

// // ************** ANSWER NO.3 ******************* //

// for(let i = 1; i < 10; i++){
//     console.log(i)
// }

// // ************** QUESTION NO.4 ******************* //

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// // ************** ANSWER NO.4 ******************* //

// let tablenum = parseInt(prompt('Enter a number to show its multiplication table:'))
// let tablelenght = parseInt(prompt('Enter a lenght multiplication table:'))

// console.log(`multiplication table of ${tablenum}`);
// for(i = 1; i <= tablelenght; i++){
//     console.log(`${tablenum} x ${i} =${tablenum * i}`)
// }


// // ************** QUESTION NO.5 ******************* //

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// // ************** ANSWER NO.5 ******************* //

// let fruits = ['apple','banana','strawberry','mango','orange']

// for(i =0; i < fruits.length; i++){
//     console.log(fruits[i])
// }


// // ************** QUESTION NO.6 ******************* //

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// // ************** ANSWER NO.6 ******************* //

// // *** COUNTING *** //
// document.writeln('<h3>COUNTING</h3>')
// for(i = 1; i <= 15; i++){
//     document.writeln(i + (i < 15 ? ',' : ""))
// }

// // *** REVERSING *** //
// document.writeln('<h3>REVERSING</h3>')
// for(let i = 10; i >= 1; i--){
//     document.writeln(i)
// }

// // *** EVEN RNUMBER *** //
// document.writeln('<h3>EVEN NUMBER</h3>')
// for(let i =0; i <= 20; i += 2){
//     document.writeln(i)
// }

// // *** odd NUMBER *** //
// document.writeln('<h3>ODD NUMBER</h3>')
// for(i = 1; i <= 20; i += 2){
//     document.writeln(i)
// }

// // *** SERIES NUMBER *** //
// document.writeln('<h3>SERIES NUMBER</h3>')
// for(i = 2; i <=20; i +=2){
//     document.writeln(i + 'k')
// }

// // ************** QUESTION NO.7 ******************* //

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// // ************** ANSWER NO.7 ******************* //

// let A = ["patties","chips","cookies","cake","drinks"]

// let userInput = prompt('Welcome to ABC bakery. What do you want to order SIr/maam')

// let index = A.indexOf(userInput)

// if(index != -1){
//     alert(`${userInput} is avaible at index ${index}in our bakery.`)
// }
// else{
//     alert(`Sorry, ${userInput} is not avaible in our bakery. `)
// }

// // ************** QUESTION NO.8 ******************* //

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// // ************** ANSWER NO.8 ******************* //

// let A = ['24','53','78','91','12']
// let largest = A[0]

// for(i = 0; i < A.length; i++){
//     if(A[i] > largest){
//         largest = A[i]
//     }
// }
// document.writeln([A])
// document.writeln("The largest number is:", largest)


// // ************** QUESTION NO.9 ******************* //

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// // ************** ANSWER NO.9 ******************* //

// let S = [24,53,78,91,12]
// let smallest = S[0]

// for(let i = 1; i < S.length; i++){
//     if(S[i] < smallest){
//         smallest = S[i]
//     }
// }
// document.writeln('The smallest number is:', smallest)

// // ************** 1. Simulating an ATM Withdrawal System ******************* //
// // ************** QUESTION NO.1 ******************* //

// Category: Banking & Finance
// 📌 Problem:
//  Create a simple ATM withdrawal system where:
// The user enters the amount they want to withdraw.
// The system checks if the amount is available in the ATM.
// The system dispenses the correct number of bills in denominations of 100, 500, and 1000.
// If the amount is not a multiple of 100, show an error message.

// // ************** ANSWER NO.1 ******************* //

// let balance = 10000;
// let withdrawalAmount = 8000;

// if(withdrawalAmount <= 0){
//     console.log('please enter amount greater then 0')
// }
// else if(withdrawalAmount > balance){
//     console.log('you dont have a sufficient balance')
// }
// else if(withdrawalAmount < balance){
//     balance = balance - withdrawalAmount
//     console.log('withdrawalAmount',withdrawalAmount,'available balance is',balance)
// }
// else{
//     console.log('went something is wrong')
// }

// // ************** 2. Parking Lot Fee Calculator ******************* //

// // ************** QUESTION NO.2 ******************* //

// Category: Transportation & Management
// 📌 Problem:
//  Create a parking fee calculator where:
// The first 2 hours are free.
// After 2 hours, the fee is $5 per hour.
// If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.

// // ************** ANSWER NO.2 ******************* //

// function parkingfee(hours){
//     if (hours <= 2){
//         return 0
//     }
//     else if(hours > 10){
//         return 50
//     }
//     else{
//         return(hours - 2) *5
//     }
// }
// document.writeln(parkingfee(1))
// document.writeln(parkingfee(7))
// document.writeln(parkingfee(12))

// // ************** 3. Car Speed Fine System ******************* //
// // ************** QUESTION NO.3 ******************* //

// Category: Traffic Control
// 📌 Problem:
//  Create a speed checking system where:
// If speed is <= 60 km/h, it's "Safe Speed".
// If speed is between 61 and 80 km/h, a warning is issued.
// If speed is above 80 km/h, a fine of $10 per km over 80 is calculated.

// // ************** ANSWER NO.3 ******************* //

// function Traffic(speed){
//     if(speed <= 60){
//         console.log('safe speed');
//     }
//      else if(speed <= 80){
//      console.log('a warning is issued')
//      }
//   let fine = (speed - 80) * 10
//   console.log(`$10 fine per km above 80  $${fine}`)
// }

// Traffic(55)
// Traffic(77)
// Traffic(90)

// // ************** 4. 4. Bank Loan Interest Calculator ******************* //
// // ************** QUESTION NO.4 ******************* //

// Category: Finance & Banking
// 📌 Problem:
//  Create a loan interest calculator where:
// If the loan amount is ≤ $10,000, the interest rate is 5%.
// If it's between $10,001 and $50,000, the interest rate is 7%.
// If it's above $50,000, the interest rate is 10%.
// Calculate the total amount to be paid back.

// // ************** ANSWER NO.4 ******************* //
 
// function calculateloan(loanAmount) { 
//   let  interestrate

//   if(loanAmount <= 10000){
//     interestrate = 0.05
//   }
//   else if(loanAmount <= 50000){
//     interestrate = 0.07
//   }
//   else{
//     interestrate = 0.10
//   }
//   let interest = loanAmount * interestrate
// let totalrepayment = loanAmount + interest

// console.log(`loanAmount : $${loanAmount}`)
// console.log(`interest rate : ${interestrate * 100}%`)
// console.log(`total repayment amount : $${totalrepayment }`)
//   }
// calculateloan(5000)
// calculateloan(25000)
// calculateloan(60000)

