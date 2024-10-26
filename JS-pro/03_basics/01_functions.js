function saymyname()
{
  console.log("h");
  console.log("i");
  console.log("t");
  console.log("m");
  console.log("a");
  console.log("n");
}

// saymyname()

// function addtwonumbers(number1, number2){
//   console.log( number1+number2)
// }
function addtwonumbers(number1, number2){
  // let result = number1 + number2;
  // console.log("abhinav");
  // return result
  return number1 + number2
}

const result = addtwonumbers("a",3)

// console.log("result: ", result)


function loginusermessage(username = "sam"){
  if(!username){
    console.log("please enter a user name")
    return
  }
  else{
  return `${username} JUST LOGGED IN`
  }
}

// console.log(loginusermessage('abhinav'))
//...num1 is an rest operator which will take all the parameter in multiple if given in array
function calculatecartprice(val1,val2,...num1){
  return num1
}
console.log(calculatecartprice(200,300,4000,900))

const user = {
  username: "abhinav",
  price: 99
}

function handleobject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject({
  username: 'abhinav',
  price: 399
})

const array = [200,400,100,600]

function returnsecondvlaue(getarray){
  return getarray[1];
}

// console.log(returnsecondvlaue(array))
console.log(returnsecondvlaue([10,20,10,203,403]))