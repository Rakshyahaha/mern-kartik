// class Person {
//   name = 'hello';
//   age = 90;

//   greet() {
//     console.log('hello jee');
//   }}
// const person1 = new Person();
// console.log(person1.name);
// person1.greet();

// class Person {

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log('hello jee');
//   }
// }
// const person1 = new Person('ram', 90);
// const person2 = new Person('shyam', 900);
// console.log(person1, person2);

// QQ => to make class of car and bank

// class car{
//   constructor(name,brand){
//     this.name = name;
//     this.brand = brand;
//   }
//   }
//   const car1 = new car('suzuki','toyota');
//   console.log(car1);

// assignment
// const users = [
//   { id: 1, name: "Rabin", age: 25, role: "admin", active: true },
//   { id: 2, name: "Sita", age: 22, role: "user", active: false },
//   { id: 3, name: "Hari", age: 30, role: "user", active: true },
//   { id: 4, name: "Gita", age: 28, role: "moderator", active: true },
//   { id: 5, name: "Ram", age: 20, role: "user", active: false }
// ];

// // Get all user names as an array.
// const names = users.map(user =>user.name);
// console.log(names);

// // Find the user whose id is 3.
// const userId3 = users.find(user => user.id == 3);
// console.log(userId3);

// // Get all users with role "user".
// const roleuser = users.filter(user => user.role === 'user');
// console.log(roleuser);

// // Check if at least one user is inactive.

// const inactive = users.some((user) => {
//   return user.active === false;
// });
// console.log(inactive); 
// // orr
// // const inac = users.some(user => user.active === false);
// // console.log(inac);

// // Count how many users are active.
// const active = users.filter(user => user.active).length;
// console.log(active);

// // Get an array of users older than 25.
// const older = users.filter((user) => {
//   return user.age >25;});
// console.log(older);
// // or
// // const olderThan25 = users.filter(user => user.age > 25);

// // Create a new array where each user has an extra field isAdult (true if age ≥ 18).
// const extra = users.map((user) => {
//   return {...user, isAdult:user.age >= 18};
// }
// );
// console.log(extra);

// // Sort users by age in ascending order.
// const sortedByAge = [...users].sort((a, b) => a.age - b.age);
// console.log(sortedByAge);

// // Remove the user whose id is 2.
// const hehe = users.filter(user => user.id !== 2);
// console.log(hehe);

// // Get only the names of active users.
// const haha = users.filter(user => user.active) .map(user => user.name);
// console.log(haha);

// // Group users by their role.
// by sir
// const groupedByRole = Object.groupBy(users, (u) => {
//   return u.role;
// });

// console.log(groupedByRole);

// const groupedByRole = users.reduce((group, user) => {
//   if (!group[user.role]) group[user.role] = [];
//   group[user.role].push(user);
//   return group;
// }, {});
// console.log(groupedByRole);


// // Find the average age of all users.
// const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
// console.log(avgAge);

// // Get the first inactive user.
// const firstInactive = users.find(user => !user.active);
// console.log(firstInactive);

// // Convert the array into an object where keys are id and values are user objects.
//by sir
// const userObj = users.map((user) => {
//   return {
//     [user.id]: {
//       name: user.name,
//       age: user.age,
//       role: user.role,
//       active: user.active
//     }
//   };
// });
// console.log(userObj)

//by chatgpt;
// const usersById = users.reduce((obj, user) => {
//   obj[user.id] = user;
//   return obj;
// }, {});

// Check if all admins are active.
// const allAdminsActive = users
//   .filter(user => user.role === "admin")
//   .every(user => user.active);

// let totalAdmin = 0;
// let totalAdminAndActive = 0;

// users.forEach((user) => {
//   if (user.role === "admin" && user.active === true) {
//     totalAdminAndActive++;
//   }
//   if (user.role === "admin") {
//     totalAdmin++;
//   }
// })
// console.log(totalAdmin);
// console.log(totalAdminAndActive);

// const age = 90;
const func= () => {
  const age = 100;

  function c(){
  console.log(age);
}
c(); 
}
func();
 