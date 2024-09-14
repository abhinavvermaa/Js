//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString()); // only date
console.log(myDate.toLocaleString());
console.log(typeof myDate)

// let myCreateDate = new Date(2001,0,1,5,4)
// let myCreateDate = new Date(2001,0,1,5,3)
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay ())
console.log(newDate.getFullYear ())
console.log(newDate.getMonth ()) 
console.log(newDate.getTime ()) 
console.log(newDate)

console.log(newDate.toLocaleString('default',{
  weekday: "long"
}))