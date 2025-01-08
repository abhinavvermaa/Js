const tinderuser = new Object()

// const tinderuser ={}

tinderuser.id ="123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false


// console.log(tinderuser)

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: 'chaudhary'
    }
  }
}
// console.log(regularuser.fullname)

const obj1 = {
  1: "a",
  2:"b"
}
const obj2 = {
  3: "a",
  4:"b"
}
const obj4 = {
  5: "a",
  6:"b"
}


// const obj3 = {obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)//'{}'is only to combine without this the output will be same
const obj3= {...obj1,...obj2}
// console.log(obj3)


const users = [
  {
    id : 1,
    email : 'hi@snfjs',
  },
  {
    id : 2,
  email : '2i@snfjs'},
  {
    id : 3,
  email : '2i@snfjs'}
]
console.log(users[1 ])
console.log(users[2].email)
console.log(Object.keys(tinderuser));//return keys in array
// console.log(Object.values(tinderuser));// returns values in array
console.log(Object.entries(tinderuser));// returns key and values in array


console.log(tinderuser.hasOwnProperty('isloggedin'))





const course ={
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "abhinav"
}

// course.courseInstructor

const {courseInstructor : instructor}= course

// console.log(courseInstructor)
console.log(instructor)

// {
//   "name": "abhinav",
//   "coursename": "js in hindi",
//   "price": "free"
// }

// [
//   {},
//   {},
//   {}
// ];

