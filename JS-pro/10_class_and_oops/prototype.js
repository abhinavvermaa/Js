let myName = "hitesh     "
console.log(myName.truelength)


let myHeros = ["thor" , "spiderman"]


let heroPower = {
  thor : "hammer",
  spiderman : "sling",

  getSiderPower : function (){
    console.log(`spidy power is : ${this.spiderman}`);
    
  }
}
//creating and object prototype which can be accessed by all func,array,strings
Object.prototype.hitesh = function(){
  console.log( `hitesh is available in all objects`);
}
//array prototype is created can only be accessed by the array only
Array.prototype.heyhitesh = function (){
  console.log(`hitesh says hello`);
  
}
myHeros.hitesh()
myHeros.heyhitesh()
// heroPower.heyhitesh()

//inheritance
const user={
  name: "chai",
  email: "chai@google.com"
}
const teacher = {
  makevideo : true

}
const teachingsupport = {
  isavai :'yes'
}

const TAsupport = {
  makeassignment: 'JS assignment',
  fullTime: true,
  __proto__: teachingsupport
}
teacher.__proto__ = user

//modern syntax
console.log(TAsupport.isavai);
console.log(TAsupport.isavai);


Object.setPrototypeOf(teachingsupport,teacher)
console.log(teachingsupport.makevideo)

let anotherusername = " chaiaurcode      "
String.prototype.truelength = function(){
  console.log(`${this}`)
  console.log(`true length is : ${this.trim().length}`);
}

anotherusername.truelength();
"hitesh".truelength()
"iceTea".truelength()