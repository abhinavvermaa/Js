//immediately invoked function expression(IIFE)


(function chai(){
  //named iife(function with name)
  console.log(`DB connected`)
})();

( (name)=>{
  //unnamed iife
  console.log(`DB connected 2 ${name}`)
} )(`Abhinav`)