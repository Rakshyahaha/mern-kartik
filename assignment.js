// # Task 1:
// Given a string `"Hello JavaScript"`, extract only the word `"JavaScript"` using a string method.
// const str = 'Hello Javascript';
// console.log(str.slice(6));

// //  #Task 2:
// // Convert the string `"frontend developer"` into uppercase.
// const fe = 'frontend developer';
// console.log(fe.toUpperCase());

// // # Task 3:
// // Check whether the string `"React is great"` contains the word `"great"`.
// const re = 'React is great';
// console.log(re.includes('great'));

// // # Task 4:
// // Replace the word `"bad"` with `"good"` in the string `"JavaScript is bad"`
// const hr = 'Javascript is bad';
// console.log(hr.replace('bad', 'good'));

// // # Task 5:
// // Trim the extra spaces from the string `"   learn js now "`.
// const tri = '   Learn js now  ';
// console.log(tri.trim());

// // # Task 6:
// // Take the string `"abcdefg"` and return the character at index 3.
// const sti = 'abcdefg';
// console.log(sti.charAt(3));

// // # Task 7:
// // Find the index of the first occurrence of `"a"` in `"banana"`.
// const ban = 'banana';
// console.log(ban.indexOf('a'));

// // # Task 8:
// // Split the string `"apple,banana,grapes"` into an array.
// const til = 'apple,banana,grapes';
// console.log(til.split(','));

// // # Task 9:
// // Using string methods, reverse the string `"hello"`.
// const yay ='hello';
// console.log(yay.split('').reverse().join(''));

//  //# Task 10:
// // Check if the string `"Welcome"` starts with `"Wel"`.
// const hah = 'Welcome';
// console.log(hah.startsWith('Wel'));

// // # Task 11:
// // Check if the string `"JavaScript"` ends with `"Script"`.
// const ha = 'Javascript';
// console.log(ha.endsWith('script'));

// // # Task 12:
// // Count how many times letter `"a"` appears in `"programming"`.

// const pro ='programming';
// console.log(pro.split('a').length-1);

// // # Task 13:
// // Remove all spaces from `"I am learning JS"`.
// const rem =  'I am learning JS';
// console.log(rem.replaceAll(' ',''));

// // # Task 14:
// // Capitalize the first letter of `"javascript"` using string methods.

// const cap = 'javascript';
// console.log(cap.charAt(0).toUpperCase() + cap.slice(1));

// Write a function that takes a number and a callback. The callback should check whether the number is even or odd.
// 

//NEW TASKS;;;;
//arrays
// const number = [1, 2, 3, 4, 5, 6, 7];
// const negNumber = [-11, -2, -3, 4, 5, 6, 7];
// const largerNumbers = [100, 200, 300, 50, 20, 40, 10];

// const string = ["Helloo", "World", "How", "Are", "You ?"];

// // ## 🔁 `forEach()` Tasks

// // 1. Print each number multiplied by 2.

// const multiplication = number.forEach((num, i) => {
//   console.log(`${num} * 2 = ${num * 2}`);
// });

// // 2. Print only the odd numbers from an array.
// const oddNumber = number.forEach((num, i) => {
//   if (num % 2 !== 0) {
//     console.log(`The odd number are ${num}`);
//   }
// });
// // 3. Count how many elements are greater than 50 using `forEach`.

// let count = 0;
// const greater = largerNumbers.forEach((num, i) => {
//   if (num > 50) {
//     count++;
//   }
// });
// console.log(`The elements that are greater than 50 is ${count}`);
// // 4. Print the index and value of each element.
// const index = number.forEach((num, i) => {
//   console.log(`The index of ${num} is ${i}`);
// });
// // 5. Calculate the sum of all numbers using `forEach`.
// let sum = 0;
// const addition = number.forEach((num, i) => {
//   sum += num;
// });
// console.log(`The sum of all number in array is ${sum}`);

// // ---

// // ## 🗺️ `map()` Tasks

// // 1. Create a new array where each number is squared.
// const square = number.map((num) => {
//   return Math.pow(num, 2);
// });
// console.log(square);
// // 2. Convert all strings to uppercase.

// const upper = string.map((str, i) => {
//   return str.toUpperCase();
// });
// console.log(upper);
// // 3. Add 10 to each number in the array.
// const addNumber = number.map((num, i) => {
//   return num + 10;
// });
// console.log(addNumber);
// // 4. Convert an array of numbers to strings.
// const convert = number.map((num) => {
//   return num.toString();
// });
// console.log(convert);
// // 5. Replace each number with `"even"` or `"odd"`.
// const replace = number.map((num) => {
//   return num % 2 === 0 ? "even" : "odd";
// });
// console.log(replace);

// // ---

// // ## 🔍 `find()` Tasks

// // 1. Find the first number greater than 100.
// const great = largerNumbers.find((num) => {
//   let res = num > 100;
//   return res;
// });
// console.log(great);
// // 2. Find the first even number.
// const firstEven = number.find((num) => {
//   return num % 2 === 0;
// });
// console.log(firstEven);
// // 3. Find the first negative number.
// const negative = negNumber.find((num) => {
//   return num < 0;
// });
// console.log(negative ?? "cant find negative number");
// // 4. Find the first string longer than 5 characters.
// const longer = string.find((str) => {
//   let long = str.length > 5;
//   return long;
// });
// console.log(longer ?? "cant find");
// // 5. Find the first number divisible by 7.
// const divisible = number.find((num) => {
//   return num % 7 == 0;
// });
// console.log(divisible);

// // ---

// // ## 🧹 `filter()` Tasks

// // 1. Get all even numbers.
// const allEven = number.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(allEven);
// // 2. Get all numbers greater than 50.
// const allgreater = largerNumbers.filter((num) => {
//   return num > 50;
// });
// console.log(allgreater);
// // 3. Get all negative numbers.
// const nega = negNumber.filter((num) => {
//   return num < 0;
// });
// console.log(nega);
// // 4. Get all strings with length more than 4.
// const length = string.filter((str) => {
//   return str.length > 4;
// });
// console.log(length);
// // 5. Get all numbers divisible by 3.
// const divi = largerNumbers.filter((num) => {
//   return num % 3 === 0;
// });
// console.log(divi);

// // ---

// // ## 🧮 `reduce()` Tasks

// // 1. Find the sum of all numbers.
// const summation = number.reduce((a, b) => {
//   return a + b;
// });
// console.log(summation);
// // 2. Find the product of all numbers.
// const product = number.reduce((a, b) => {
//   return a * b;
// });
// console.log(product);
// // 3. Find the maximum number.
// const maximum = number.reduce((a, b) => {
//   return a > b ? a : b;
// });
// console.log(maximum);
// // 4. Count how many elements are even.
// const countEven = number.reduce((count, num) => {
//   return num % 2 == 0 ? count + 1 : count;
// }, 0);
// console.log(countEven);


//My chatgpt answers

 //`forEach()` Tasks
// 1. Print each number multiplied by 2.
// const numbers = [10, 20, 30, 40];
// numbers.forEach(n => console.log(n * 2));

// //2. Print only the odd numbers from an array.
// const number = [11, 22, 33, 44, 55];

// number.forEach(n => {
//   if (n % 2 !== 0) console.log(n);
// });

// //3. Count how many elements are greater than 50 using `forEach`.
// const num = [10, 60, 80, 25];

// let count = 0;
// num.forEach(n => {
//   if (n > 50) count++;
// });
// console.log(count);


// //4. Print the index and value of each element.
// const numberr = [5, 10, 15];

// numberr.forEach((value, index) => {
//   console.log(index, value);
// });

// // 5. Calculate the sum of all numbers using `forEach`.
// const numb = [10, 20, 30];
// let sum = 0;

// numb.forEach(n => sum += n);
// console.log(sum);


 // 🗺️ `map()` Tasks
// const numbers = [2, 4, 6, 8];
// const strings = ["ram", "shyam", "hari"];

// // 1. Create a new array where each number is squared.
// const result = numbers.map(n => n * n);
// console.log(result);


// // 2. Convert all strings to uppercase.
// const results = strings.map(str => str.toUpperCase());
// console.log(results);

// // 3. Add 10 to each number in the array.
// const plusTen = numbers.map(n => n + 10);
// console.log(plusTen);

// // 4. Convert an array of numbers to strings.
// const numToStr = numbers.map(n => String(n));
// console.log(numToStr);

// // 5. Replace each number with `"even"` or `"odd"`.
// const evenOdd = numbers.map(n => (n % 2 === 0 ? "even" : "odd"));
// console.log(evenOdd);


// ## 🔍 `find()` Tasks
// const numbers = [10, 21, 55, 60, 75, 120, -5, 33];
// const strings = ["ram", "shyamji", "hari", "computer"];
// const str = "javascript";


// // 1. Find the first number greater than 100.
// const gt100 = numbers.find(n => n > 100);
// console.log(gt100);

// // 2. Find the first even number.
// const firstEven = numbers.find(n => n % 2 === 0);
// console.log(firstEven);

// 3. Find the first negative number.
// 4. Find the first string longer than 5 characters.
// 5. Find the first number divisible by 7.

// ---

// ## 🧹 `filter()` Tasks

// 1. Get all even numbers.
// 2. Get all numbers greater than 50.
// 3. Get all negative numbers.
// 4. Get all strings with length more than 4.
// 5. Get all numbers divisible by 3.

// ---

// ## 🧮 `reduce()` Tasks

// 1. Find the sum of all numbers.
// 2. Find the product of all numbers.
// 3. Find the maximum number.
// 4. Count how many elements are even.
// 5. Reverse a string using `reduce`.

// question to make car function constructor


function Car(name, color){
    this.name = name;
    this.color = color;}
const car1 = new Car('honda', 'white');
const car2 = new Car('Hyundai', 'black');
console.log(car1, car2);