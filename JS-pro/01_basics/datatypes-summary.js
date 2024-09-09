//primitive

//7 types :  string , number , boolean , null , undefined , symbol , bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidestemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 332523432432131n
console.log(typeof bigNumber)

//reference (non-primitive)

//Array , objects , Functions

const heros = ["shaktiman" ,"nagraj", "doga"]
let myobj = {
  name: "abhinav",
  age: 21,
}

const myfunction = function(){
  console.log("hello world")
}
console.log(typeof myfunction)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) , Heap(non-primitive)

let myYTname = "tradewizard";

let anotherName = myYTname;

anotherName = "tradingbull"
console.log(anotherName)
console.log(myYTname)

let user1 = {
  email: "user@google.com",
  upi: "user@ybl"
}

let user2 = user1;

user2.email = "avi@google.com"

console.log(user1.email)
console.log(user2.email);
