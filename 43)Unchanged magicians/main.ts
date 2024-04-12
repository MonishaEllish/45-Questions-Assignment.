let magician = ["Harry Potter", "Ron weasley", "Hermonie Granger"];

function copyArray(arr:string[]){
   return [...arr]
}


function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "The Great" + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}


const copyMagicianArray= copyArray(magician)
make_great(copyMagicianArray);

console.log(`This is my original array:`);
show_magicians(magician);


console.log(`This is my modified copy of the array:`);
show_magicians(copyMagicianArray);