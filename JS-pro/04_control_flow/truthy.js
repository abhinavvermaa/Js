const userEmail = []

// 
if (userEmail) {
  console.log("got email")
}
else{
  console.log("not got");
}

// falsy vlaues

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


//truthy value
// "0" , 'false' , " " , [] , {} , function(){}


if (userEmail.length === 0) {
  console.log("array is empty")
}


const emptyobject = {}

if(Object.keys(emptyobject).length === ' ')
{
  console.log('object is empty');
  
}

//nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ??20

console.log(val1);


//terniary operator
// condition ? true : false;

const ice  = 200

ice >= 80 ? console.log('yes') : console.log('no');
