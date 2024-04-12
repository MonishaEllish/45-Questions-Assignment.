var car = "fortuner";
var model = 2023;
var numbers = [2, 4, 6, 8, 10];
//STRING TEST
console.log("Is car == `fortuner`? I predict true");
console.log(car == "fortuner"); // true
console.log(" Is car != `fortuner`? I predict false");
console.log(car != "fortuner"); // false
///LOWER CASE TEST
console.log("Is car.tolowercase() == `fortuner`? I predict true");
console.log(car.toLowerCase() == "fortuner"); // true
console.log(" Is car.tolowercase() == `Thar`? I predict false");
console.log(car.toLowerCase() == "Thar"); // false
///numerical test 
console.log("Is model == 2023? I predict true");
console.log(model == 2023); // true
console.log("Is model == 2025? I predict false");
console.log(model == 2025); // false
/// GREATER  THAN OR LESS THAN
console.log("Is model > 2021? I predict true");
console.log(model > 2021); // true
console.log("Is model < 2021? I predict false");
console.log(model < 2021); // false
//AND & OR OPERATOR
console.log("2021< model > 2021? i predict true");
console.log(model > 2021 && model < 2025); //true
console.log("2021< model > 2021? i predict true");
console.log(model < 2021 || model > 2025);
// TEST WHETHER THE ITEM IS IN ARRAY
console.log(" Is `2` in numbers? I predict true");
console.log(2 in numbers); // true
console.log(" Is `5` in numbers? I predict true");
console.log(5 in numbers); // false
