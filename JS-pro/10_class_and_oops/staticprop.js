class User{
  constructor(username){
    this.username = username;
  }
  logMe(){
    console.log(`username : ${this.username}`);
  }
  //by static keyword we can stop the access of the method by the class object
  static createId(){
    return `123`
  }
}

const hitesh =  new User("hitesh")
// console.log(hitesh.createId());

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(
  iphone.createId());
