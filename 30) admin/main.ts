const users_Name : string [] = [`Admin`,`Eric`,`Ali`,`Fatima`];
for (let i=0;i<users_Name.length; i++){

if (users_Name[i] === `Admin`){
   console.log(`Hello Admin would you like to see the status report?`);
}
else{
   console.log(`Hello ${users_Name[i]}, thankyou for logging in again,`)
}

}