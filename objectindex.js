//   to make object
//  const person = {
//    name: 'John',
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

//console.log(typeof Object);
//  const obj = new Object();
//  obj.age = 9;
//  console.log(obj);
// for(let per of Object.keys(person)){
//         console.log(per);
//     }
//     console.log(Object.keys(person));


// person.sleep();
// // console.log(person.name);


// // if you want to ((add)) new property in the object then
// // option 1
// person.job = 'Dev';
// console.log(person);

// // for update
// person.age = 100;
// // console.log(person);

// // only sometimes used - to get object property
// // console.log(person['address']);

// // for deletion
// delete person.sleep;

// console.log(person);

  // class taskk (to make object with their properties and functions)==>>
 //for car
 // const car = {
 //   carName: "Toyota",
 //   model: "2022",
 //   manufacturer: "Toyota Motors",
 //   carinfo: function () {
 //     console.log(
 //       `The ${this.carName} is maufactured by ${this.manufacturer} in year ${this.model}`
 //     );
 //   },
 // };
 // car.carinfo();
 // const product = {
 //   productName: "Louis Vuitton",
 //   type: "luxury",
 //   originated: "French",
 //   productInfo: function () {
//     console.log(
//       `${this.productName} is a ${this.originated} ${this.type} brand.`
//     );
//   },
// };
// product.productInfo();
// //for house
// const house = {
//   houseLocation: "Baneshwor",
//   color: "blue",
//   floor: "three floors with a balcony",
//   houseInfo: function () {
//     console.log(
//       `The property is located at ${this.houseLocation} and has ${this.floor}, the front painted ${this.color}`
//     );
//   },
// };
// house.houseInfo();


// const person = {
//   name: 'John',
//   age: 90,
//   habits: ['eat', 'sleep', 'code'],
//  };


//  const copyObject = { ...person, m: 9, age: 100 };

//  console.log(copyObject);

// class task => make loop using for each in const fields and 
// delete page search sort from const obj
// const fields = ['page', 'search', 'sort']; 
// const obj = {
//     page : 1,
//     search : 'hello',
//     sort : 'ascending',
//     rating : 5,
//     title : 'great'
//   };

//   fields.forEach((field) => {
//     delete obj[field];
//   })
//   console.log(obj);

// const fields = ['page', 'search', 'sort']; 
// const obj = {
//     page : 1,
//     search : 'hello',
//     sort : 'ascending',
//     rating : 5,
//     title : 'great',
//     some: function() {
//         // console.log(this);
//         console.log(`rating is ${this.rating}`);
//     }
//   };
//   obj.some();


//another way of making object i.e using  function constructer
// function User(name, age) {
//     this.name = name;
//     this.age = age;

// }
// const user1 = new User('ram', 90);
// const user2 = new User('shyam', 100);
// console.log(user1,user2);


// array of object
const persons = [
  {
    id: 1, 
    name: "John",
    gender: "male",
    age: 30
  },
  {
    id: 2, 
    name: "Jane",
    gender: "female",
    age: 25
  },
  {
    id: 3, 
    name: "Bob",
    gender: "male",
    age: 35
  },
  {
    id: 4, 
    name: "Alice",
    gender: "female",
    age: 28
  }
];
// console.log(persons);

// get johns data
// const john = persons.find((per) => per.name === "John");
// console.log(john);

// get objects which gender properties has a female value
// const females = persons.filter((per) => per.gender === "female");
// console.log(females);

// to get total age
// const m = persons.reduce((a,b) => a + b.age,0); or u can use below both are same
// const totalAge = persons.reduce((sum, per) => sum + per.age, 0);
// console.log(totalAge);

// const personNames = persons.map((person )=> {
//   return person.name});
// console.log(personNames);
// console.log(persons);

