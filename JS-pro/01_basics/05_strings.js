const name = "abhinav";
const repocount = 50;

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("abhinav-vr-com");//this is an object type

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('v'))
const newString = gameName.substring(0, 4)//last value 4 is not included
console.log(newString);


const anotherString = gameName.slice(0,4);//different from substring as accepts negative values
console.log(anotherString);

const newStringone = "  histesh   "
console.log(newStringone)
console.log(newStringone.trim());


const url = "https://abhinav.com/abhinav%20verma"

console.log(url.replace('%20', "-"))
console.log(url.includes('verma'))

console.log(gameName.split('-'))