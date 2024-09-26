// const coding = ['js','ruby','py','java','cpp']

// const values = coding.forEach((item )=>{
//   // console.log(item);
//   return item
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> {
//   return num > 4
// })

const newNums = []

myNums.forEach((nums)=>{
  if(nums>4)
  {
      newNums.push(nums)
  }
})

console.log(newNums)