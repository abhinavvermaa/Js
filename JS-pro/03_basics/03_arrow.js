const user = {
  username: "abhinav",
  price: 999,

  welcomemessage: function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this)

  }
} 

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);


// function chai(){
//   let username = "abhinav"
//   console.log(this)
// }
// chai()


// const chai = () => {
//   let username = "abhinav"
//   console.log(this);
// }

// chai()

// const addtwo = (num1,num2) =>   num1+num2; // implicit return when we don't use return keyword to return , exlicit return means when we use it 
const addtwo = (num1,num2) =>   ({username: "avish"});

console.log(addtwo(5,6))


const myarray = [2,4,5,32,1]

console.log(myarray.forEach(()=>(1+2)))