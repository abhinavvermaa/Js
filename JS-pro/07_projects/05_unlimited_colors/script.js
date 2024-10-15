function randomcolor(){let hex = '0123456789ABCDEF';
let color = '#';
for(let i =0;i<6;i++){
  color += hex[Math.floor(Math.random()*16)]
}
return color;
}
let intervalId
const startchanging  = function(){
  intervalId = setInterval(changecolor,1000);

  function changecolor(){
    document.body.style.backgroundColor = randomcolor();
  }
}
const stopChanging  = function(){
  clearInterval(intervalId);
}
document.querySelector("#start").addEventListener('click',startchanging)
document.querySelector('#stop').addEventListener('click',stopChanging)
