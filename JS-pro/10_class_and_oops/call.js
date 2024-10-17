function setusername (username){
  //complex Db calls
  this.setusername = username
  console.log('called')
}

function createuser(username, email, password){
  setusername.call(this, username)//call: used for holding the reference (calling the function)//this is used to determine the current object
  this.email = email
  this.password = password
}

const chai = new createuser("chai","chia12","1233")
console.log(chai);
