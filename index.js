/*
primitive types
string
number
boolean
null
undefined
----------------------------
reference types
array
object
function
*/

// let personName = 'hari';
// personName = 'Sita';
// console.log(personName);

// let personName = 'hari';
// const type = 'good boy';
// console.log(personName.concat(' is a ').concat(type));

//console.log(personName.at(-2));
// console.log(personName.charAt(2));

// second day
// let personName = 'harisome.jpg';
// const type = '54  ';
// console.log(type.trim().length);
// console.log(personName.includes('ra'));
// console.log(personName.replaceAll('hare','shyam'));
// console.log(personName.slice(0,3));
// console.log(personName.substring(1,4));
// console.log(personName.startsWith('h'));
// console.log(personName.split('.')[1]);

// template string//

// let personName = 'hari';
// const age = 54;
// const somes = `hello ${personName.toLocaleUpperCase()} ${age}`;
// console.log(somes);


// const price = '1000'; 
// const m = Number(price);
// console.log(m +m); 

// const price = 'gsdsd'; 
// const m = Number(price);
// // console.log(Number.isFinite(price));
// console.log(Number.isNaN(m));

// const price = 90000;
// console.log(price.toExponential())

// const price = 900.78954;
// console.log(price.toFixed(2));

// third day

// function greet(){
// console.log('hfgbfv');
// console.log('hfgbfv');
// console.log('hfgbfv');
// }

// greet();
// const person = {
//     name: 'ram',
//     age: 90,
//     greet: function(){
//         console.log('hello jee')
//     },

// };

// console.log(Math.PI);
// console.log(Math.cbrt(64));
// console.log(Math.sqrt(4));
// ekdam imp

// console.log(Math.max(11, 33, 77));
// console.log(Math.min(22,55,66));
// console.log(Math.pow(2,3));

// const rating = 7.49;
// console.log(Math.ceil(rating));
// console.log(Math.floor(rating));
// console.log(Math.round(rating));
// console.log(Math.trunc(10.325));

// const random = Math.floor(Math.random() * 50)+1;
// console.log(random);

// let random = Math.floor(Math.random() * 50) + 1;
// if (random < 20) random += 20
// console.log(random);

// shortcut
// const random = Math.floor(Math.random() * 20) + 30;
// console.log(random);

// const islog = false;
// console.log(islogin);

// null undefined
// const n = null;
// let username;
// console.log(username);
// console.log(n);

// third day
// const a = 90;
// const b = 100;

// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// console.log(a / b);
// console.log(b % a);

// const a = 90;
// const b = 100;


// const result = 90 + (90 - 100);

// console.log(result);

// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// console.log(a / b);
// console.log(b % a);

// let a = 90;

// // a = a + 1;
// // ++a;

// const b = ++a;
// console.log(b);

// const a = 90;
// const b = 100;
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);

// const a = 90;
// const b = 100;
// console.log(a > b || a < b || a === b);
// console.log(a > b && a < b && a === b);

// use  of ternary operator
// const a = 90;
// const b = 100;
// // const gender = a >  20 ? 'men': 'child';
// const gender = a < 20 ? 'men' : a === 90 ? 'asldkj' : a < 90 ? 'asd;lk' : 'child';
// console.log(gender); 
// let age = 20;
// const check = age < 20 ? "Junior" : age > 50 ? "Senior" : "regular";
// console.log(check);


// if else

//     const age = 80;
//     if( age>90){
//         console.log('hello world');
//     }
// else {
//     console.log('hi world');
// }
// const age = 110;

// if (age > 90) {
//   console.log('hello world');
// } else if (age > 70) {
//   console.log('hello');
// } else if (age > 110) {
//   console.log('hello');
// } else if (age > 120) {
//   console.log('hello');
// } else {
//   console.log('hello');
// }
// let age = 25;

// if (age < 20) {
//   console.log("Junior");
// } else if (age > 20) {
//   console.log("Senior");
// } else {
//   console.log("Regular");
// }

// const pos = 100;

// switch (pos) {

//   case 100:
//     console.log('hello jee khjhjkh bkjh');

//     break;

//   case 2:
//     console.log('hello jee');

//     break;

//   case 3:
//     console.log('hello jee');

//     break;

//   default:
//     console.log('hello jee');
//     break;

// }
// const a = 900;
// const b = 1000;
// const calc = 'add';

// const pos = 1;


// switch (pos) {

//   case 1:
//     console.log('hello jee khjhjkh bkjh');

//     break;

//   case 2:
//     console.log('hello jee');

//     break;

//   case 3:
//     console.log('hello jee');

//     break;

//   default:
//     console.log('hello jee');
//     break;
// }

// assignment operator
// let age = 20;

// // age = age +100;
// // shortcut assignment operator
// // age +=100;
// // power if double use
// age **= 4;
// console.log(age);


// Array
// const persons = ['ram', 'shyam', 'hari'];
// console.log(persons[5]);

// const person = ['ram', 'shyam', 'hari'];
// person[0] = 'rita'
// console.log(person);

// const person = 'shyam';
// person[0] = 'r';

// const persons = ['ram', 'shyam', 'hari'];
// persons[0] = 'rita';

// console.log(persons);

// addition in array
// const persons = ['ram', 'shyam', 'hari'];
// forEach,map, find , filter , reduce
// persons[0] = 'rita';
// persons.push('lio', 'mio');
// persons.pop();
// persons.shift();
// persons.unshift('rio')

//console.log(persons.at(0));
//console.log(persons.concat('t', 's', 'l'));
//console.log(persons.copyWithin(2, 1))
// console.log(persons.fill(90, 1));
// console.log(persons.includes('ram')); imp
// console.log(persons.indexOf('ram'));
// console.log(persons.reverse());
// console.log(persons.length);
// console.log(persons.slice(1,3));

// persons.splice(0,2);
// console.log(persons);

// loop
//  const persons = ['ram', 'shyam', 'hari'];
 // forEach,map, find , filter , reduce

 // let i = 0;
 // while(i<10){ 
 //       i++;
 //     console.log(`hello ${i}`);
 // }

 // let i = 0;
 // while (i < 10) {
 //   i++;
 //   console.log(`hello ${i}`);
 // }

// do{
//   i++;
//   console.log(`hello ${i}`);
// }while(i<10)

// for loop
// for(let i=1; i <= 20; i++){
//   if(i== 5){
//     break;
//   }
//    console.log(i);
// }

// for(let i=1; i <= 20; i++){
//   if(i === 5 || i === 6){
//     continue;
//   }
//    console.log(i); }

//practice question
// for i from 1 to 15
//     if i is divisible by 3 and 5
//         print "fizz buzz"
//     otherwise if i is divisible by 3
//         print "fizz"
//     otherwise if i is divisible by 5
//         print "buzz"
//     otherwise
//         print i
//answer;
    // for(let i=1;i<=15;i++){
    //     if(i % 3 === 0 && i%5 === 0) {
    //         console.log("fizz buzz");
    //     }   
    //     else if(i% 3 === 0){console.log("fizz");}
    //     else if(i % 5 === 0){
    //         console.log("buzz"); }
    //         else{
    //             console.log(i);
    //         }}


// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// for (let n in persons) {
//   console.log(n);
// }

// for (let n of persons) {
//   console.log(n);
// }


// to make  function 

// function greetPerson(){
//   console.log('hello world');
// }
// // another method to make function
// const greets = () => {
//   console.log('Sello jee');
// }
// greetPerson();
// greets();


// return


// parameters and argument
//  const greets = (personName, age) => { 
//     console.log(`${personName} ${age}`);
//  }
//  greets('ram',90);

//  cw task1 = to add two numbers using function
// const add = (num1, num2) => {
//     console.log(`${num1 + num2}`);}
// add(10,20);

//  cw task2 


// const greets = (personName, age) => {
// return `${personName} ${age}`;}
// const m = greets('ram', 90);
// console.log(m);


// call back function
// const greets = (func) => {
//   func();
// }
// const greeting = () => {
//   console.log('hello jee');
// }
// greets(greeting);

// const greets = (func) => {
//   func(90);
// };
// const greeting = () => {
//   console.log('hello jee');
// }
// greets((a) => {
//   console.log(`hello ${a}`)
// });



// const persons = ['ram', 'shyam', 'hari'];
// persons.forEach((per,i) => {
//     console.log('hello world');
// });



// task
// const numbers=[11,22,33,44,55,66,77];
// let sum=0;
// numbers.forEach((per,i) =>{
// sum+=per
// // or sum = sum + per;
// });
// console.log(sum);

// const numbers = [10, 20, 30, 40, 50];
// let total = 0;

// numbers.forEach((num) => {
//   total = total + num;
// });
// console.log(total);


// mapppp ///


// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.map((n, i) => {
//   return n + 100;
// });

// console.log(nN);

// task = to make 77 to 100
// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.map((n, i) => {
//   return n === 77 ? 100 :n;
// });
// console.log(nN);


// find//
// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.find((n, i) => {
//   return n > 33;
// });
// console.log(nN);



// filter///
// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.filter((n, i) => {
//   return n > 33;
// });
// console.log(nN);


// reduce//

// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// const numbers = [11, 22, 33];

// const nN = numbers.reduce((a, b) =>  {
// //     console.log(b)
// //   return 9;
// // });
// // // console.log(nN);

//for addition
// 11,22
// 33, 33
// return a + b });
// console.log(nN);

//class task = to find the maximum number
// const numbers = [11, 22,55,33];

// const nN = numbers.reduce((a, b) =>  {
//   return a < b ? a : b; 
// });
// console.log(nN);

// const persons = ['ram', 'shyam', 'hari'];
// // forEach, map, find, filter, reduce

// const numbers = [11, 22, 1, 55];
// const nN = numbers.reduce((a, b) => {
//   console.log(a);
//   return a + b;
// }, 0);
// console.log(nN);


// spread, destructing;

// const oldColors = ['blue', 'green'];
// const newColors = ['purple', 'golden'];

// console.log([...newColors, 'tomato', ...oldColors]);


// const persons = ['ram', 'hari', 'shyam'];
// //use this instead
//  const [a, b, c] = persons;
//  console.log(a, b, c);

 //OR u can use direct method

//  const [x, y, z] = ['ram', 'hari', 'shyam'];
//  console.log(x, y, z);




//donot use this method since this is lengthy
// // const a = persons[0];
// // const b = persons[1];
// // const c = persons[2];


const originalString = "javascript";


const n = originalString.split('');
// ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
 const m = n.reduce((p, n) => {
//   // p=j n=a
//   // avaj
  return n + p;
})
console.log(m);