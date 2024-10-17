class User{
  constructor(email,password){
    this.email = email;
    this.password = password;
  }
  get password(){//getter and setter name will be same as the actual property of the constructor
    return `${this._password}hitesh`
  }
  set password(value){
    this._password = value.toUpperCase()
  }//this will override the constructor setted value
  get email(){//the name of email->_email will be used as neccessary in getter and setters
    return this._email.toUpperCase()
  }
  set email(value){
     this._email = value
    }
}

const hitesh = new User("avi@gmail.com","abhi123")
console.log(hitesh.password);
console.log(hitesh.email);
