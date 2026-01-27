//  destructive is important
 //object 
// spread , destructing

// const persons = ['ram' , 'hari', 'shyam'];

// shortcut method(destructive method);
// const [a, b, c] = persons;
// console.log(a, b, c);

// lomg method
// const a = persons[0];
// const b = persons[1];
// const c = persons[2];
// console.log(a, b, c);


// const persons = ['ram' , 'hari', 'shyam'];

// const [a, b, c] = persons;
// const originalString = "javascript";
// const n = originalString.split('');
// // [ 'j', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']

// const m = n.reduce((a, b) => {
//   return a + b;
// })
// console.log(m);

const originalString = "javascript";


const n = originalString.split('');
// ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
 const m = n.reduce((p, n) => {
//   // p=j n=a
//   // avaj
  return n + p;
})
console.log(m);




// const person = {
//   name: 'John',
//   age: 90,
//   habits: ['eat', 'sleep', 'code'],
//   address: {
//     city: 'New York',
//     street: 'Main Street',
//     number: 123
//   },
//   sleep: () => {
//     console.log('person is sleeping');
//   }
// };

// person.job = 'Dev';
// console.log(person);
