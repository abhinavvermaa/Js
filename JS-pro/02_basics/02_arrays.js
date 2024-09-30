const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc) //insert complete array inside array 

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const cobine = marvel_heros.concat(dc)//inserts the elements into the array !!!!!!! concat itself donot concate the array
// console.log(marvel_heros)
console.log(cobine)

const all_new_heros =[...marvel_heros, ...dc]//spread [...], spreads the element inside the array
console.log(all_new_heros)

const another_array = [ 1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray(cobine))
console.log(Array.from("ABHINAV"))
// console.log(Array.from({name:"hitesh"})) // interesting it only gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300


// console.log(Array.of(score1,score2,score3))