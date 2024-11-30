const accountId = 144432
let accountEmail = "anup@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;
//accountId = 23
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
