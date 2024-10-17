const promiseOne = new Promise(function(resolve,reject){
  //do an async task
  //db calls,cryptography , network
  setTimeout(function(){
    console.log('Async task is completed');
    resolve();
  },1000)
})

promiseOne.then(function(){
  console.log("promise comsumed");
  
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  },1000)
}).then(function(){
  console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
      resolve({username: " chai" , email: "chai@example.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username:"hitesh" , password: "123"})
    }
    else{
      reject("ERROR : something went wrong")
    }
  },1000)
})

 promiseFour
 .then((user)=>{
  console.log(user);
  return user.username
})
.then((username)=>{
  console.log(username)
})
.catch(function(error){
  console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected "))


const promiseFive = new Promise((resolve,reject)=>{
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username:"javascript" , password: "123"})
    }
    else{
      reject("ERROR : JS went wrong")
    }
  },1000)
})

async function consumepromiseFive(){
  try{
    const response = await promiseFive
  console.log(response)
  }catch(error){
    console.log(error)
  }
}

consumepromiseFive()


// async function getAllUsers(){
//   try{
//     const response = await fetch('https://api.github.com/users/abhinavvermaa')
//   const data = await response.json()
//   console.log(data)
  
//   }
//   catch(error){
//     console.log("E: ",error);
//   }
// }

// getAllUsers()

fetch('https://api.github.com/users/abhinavvermaa')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error))