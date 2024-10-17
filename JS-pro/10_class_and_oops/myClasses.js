//ES6

class User{
  constructor(username, email , password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}abc`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const chai = new User('abhinav',"234nsdfns",'1232113')
console.log(chai.encryptPassword())
console.log(chai.changeUsername());

//behind the scene 

function user1(username , email , password){
  this.username = username;
  this.email = email;
  this.password = password;
}

user1.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
const tea = new user1('abhinav','234nsdfns','1232113')

console.log(tea.encryptPassword());
