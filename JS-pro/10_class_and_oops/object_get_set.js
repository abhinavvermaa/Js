const User = {
  _email : 'abhinav213'
  ,
  _password: '1231pp'
,
  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this.email = value
  }
}

const tea = Object.create(User)//to create abject of an object

console.log(tea.email);
