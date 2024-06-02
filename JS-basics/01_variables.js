const accountID = 144553
let accountEmail = "abhinavvermax@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountID = 2 // not allowed

accountEmail = "avu@gmail.com"
accountPassword = "12313"
accountCity = "bengaluru"

console.log(accountID);
// prefer not to use var
// because of issue in block scope and functional scope
console.table([accountID,accountEmail,accountPassword,accountCity]);