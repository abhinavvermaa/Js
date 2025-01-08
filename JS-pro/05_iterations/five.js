const conding = ['js','ruby','java','py','cpp']

// conding.forEach( function (item) 
// {
//   console.log(item)
// } 
// )

// conding.forEach((it) => {
//   console.log(it);
// })

// function printme(item){
//   console.log(item);
  
// }

// conding.forEach(printme)

conding.forEach((item,index,arr)=>{
  console.log(item,index,arr);
} )

const mycoding = [{
  languageName: 'javascipt',
  languagefilename: 'js'
},
 {
  languageName: 'python',
  languagefilename: 'py'
},
{
  languageName: 'java',
  languagefilename: 'java'
},]

mycoding.forEach((item)=>{
  console.log(item.languageName);
  
})