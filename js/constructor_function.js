function User(name) {
  this.name = name;
  this.isAdmin = false;
}
// function user(name) {
//   return {
//     name: name,
//     isAdmin: false,
//   };
// }

let user = new User("Jack");
// let user = User("Jack");

console.log(user);
