const user = {
  username: "abhinav",
  price: 999,

  welcomemessage: function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this)

  }
} 
// console.log(user.welcomemessage())

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);


// function chai(){
//   let username = "abhinav"
//   console.log(this)
// }
// chai()


const chai = () => {
  let username = "abhinav"
  console.log(this);
}

// chai()
//if we use this in normal function it will provide node environment global values and if we use it in a arrow function then it will provide you a empty parenthesis value .
// this in function inside object will return the value of the whole object
// const addtwo = (num1,num2) =>   num1+num2; // implicit return when we don't use return keyword to return , exlicit return means when we use it 
// const addtwo = (num1,num2) =>   ({username: "avish"});

// console.log(addtwo(5,6))


// const myarray = [2,4,5,32,1]

// console.log(myarray.forEach(()=>(1+2)))