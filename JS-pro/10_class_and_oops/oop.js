const user = {
  username : "abhinav",
  loginCount : 9,
  signedIN : true
,
  getUserDetails: function(){
    // console.log("got user details from databse")
    console.log( `username : ${this.username}`)
    console.log(this)
  }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this)

function User(username, loginCount , isLoggedIn){
  this.username = username ;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
  }
  this.greeting();
  return this
}

const Userone = new User("one" , 2 , 3)
const Usertwo = new User("two" , 7 , 9)
//without 'new' keyword all the values will we overridden 
// console.log(Userone.constructor);
console.log(Usertwo);
