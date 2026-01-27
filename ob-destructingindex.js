// spread, destructing 

// destructing
// const person  = {
//     name: 'Max',
//     age:24,
//     habits: ['sleep', 'dance'],
//     address: {
//         city: 'New York',
//         country: 'USA',

//         // to destruct object inside the object
//         obj: {
//             nam: 'Max'
//         }
//     }}

// const {address, age, habits, name } = person;

// console.log(address);

// const {address, age, habits: [a, b], name } = person;
// console.log(a);

// to display the object inside the object(name:Max)
// const {address:{city,country, obj: {nam }}, age, habits, name } = person;
// console.log(nam);

// or u can use simple method as below
// const {name, habits,address} = person;

// object destructing using map
// const persons = [
//   {
//     id: 1,
//     name: "John",
//     gender: "male",
//     age: 30
//   },
//   {
//     id: 2,
//     name: "Jane",
//     gender: "female",
//     age: 25
//   },
// ];

// // const somes = persons.map(({ age, id, name, gender }) => {

// //   console.log(gender);
// // });
// const somes = persons.map(({ age, id, name, gender }) => {
// return gender;
// });
// console.log(somes);


// undefined safety
// let  a;
// // a = {
// //     id: 1,
// //     name: 'ram'
// // };
// console.log(a?.name);

// const func = (name = 'ram', age = 23) => {
//     console.log(name,age);
// }
// func('shyam', 100);

// race operator(it should be used at last, not in middle)
// const func = (name, ...args) => {
//     console.log(args);
// }
// func('ram', 11 ,22,33,44,55,66);




