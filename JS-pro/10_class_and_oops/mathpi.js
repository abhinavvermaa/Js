const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
// console.log(descripter);


const chai = {
  name:  'ginger chai',
  price: 250,
  isavailable: true
,
  orderChai: function(){
    console.log('chai nahi bani');
    
  }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
  // writable: false,
  enumerable: false //this chai -> name will not be iterable further anymore
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name")); 

for (let [key,value] of Object.entries(chai)) {
  if(typeof value !== 'function'){console.log(`${key}: ${value}`)}
}