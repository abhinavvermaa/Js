const myObj ={
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift:'swift by apple'
}

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming = ['js','ruby','py','java','cpp']

for (const key in programming) {
  // console.log(programming[key]);
}

//IMP: for objects and arrays for key we can give directly the variable name 'var' as defined but for the value we must give it like this -> var{key}

const map = new Map()
map.set('IN','INDIA')
map.set('US','United states of America')
map.set('IN','INDIA')

for (const key of map) {
  console.log(key);
  
}