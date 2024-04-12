var alien_variable = "green";
/*passing version
if (alien_variable === `green`){
    console.log(`player just earned 5 points`)
}
else{
    console.log(`0 points`)
}  */
// failing version
alien_variable = "red";
if (alien_variable === "green") {
    console.log("player just earned 5 points");
}
else {
    console.log("{}");
}
