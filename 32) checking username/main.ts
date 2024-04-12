let current_users = [`taHa`, `shaMeer`,`Daniyal`,`daniel`];
let new_users = [`joHn`,`taHa`,`Hamza`,`bennY`,`shaMeer`];
new_users.forEach(new_usersname =>{
let lowerCase = new_usersname.toLowerCase();
if (current_users.map(c_users => c_users.toLowerCase()).includes(lowerCase)){
    console.log(`The username ${new_usersname},is not available please write a different user name`);
}
else{
    console.log(`The username ${new_usersname} is available`);
}



})














