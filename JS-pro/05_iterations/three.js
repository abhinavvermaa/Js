//for of 

// [" ","",""]
// [{},{},{}]

// let arr = new Array();
// arr = [1,2,3,4,5]

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello world"

// for (const greet of greetings) {
//   console.log(`${greet}`)
// }


// Maps 

const map = new Map()
map.set('IN','INDIA')
map.set('US','United states of America')
map.set('IN','INDIA')

console.log(map);


for (const [k,v] of map) {
  console.log(k,v);
}

const myobj = {
  game1 : 'nfs',
  game2 : 'spiderman'
}

// for (const [key,value] of myobj) {
//   console.log(key,value)
  
// }//objects are not iteratable for in loop will be used 

