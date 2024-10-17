class User{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`Username is ${this .username}`)
  }
}
 
// const obj = new  User('abhinav'
// )
// console.log(obj.logMe());

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email = email;
    this.password = password;
  }
  addCourse(){
    console.log(`new course was added by ${this.username}`);
    
  }
}

const obj = new Teacher("abhinav","123","112233")
// obj.addCourse()

const masalachai = new User('masala')
masalachai.logMe()

console.log(obj instanceof User)