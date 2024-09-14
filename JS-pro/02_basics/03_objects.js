//singleton

//object literals
//Object.create (singleton)

const mysym = Symbol("key1")

const jsUser = {
  name: "abhinav",
  age: 20,
  [mysym]:"key1",
  "full name":"abhinav verma",
  location: "Jaipur",
  email: "avi@gmail.com",
  isloggedin: false,
  lastlogindaya: ["monday","saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(jsUser[mysym])


jsUser.email = "abhinav@avi.com"
// Object.freeze(jsUser) // no more futher changes will abe alllowed
jsUser.email = "abhinav@abhinav.com"

console.log(jsUser.email)
// console.log(jsUser)


jsUser.greeting = function(){
  console.log("hello js user")
}
jsUser.greeting2 = function(){
  console.log(`hello js user  , ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())