let magician = ["Harry Potter", "Ron weasley", "Hermonie Granger"];


function make_great ( magicianArray:string[] ){
    for (let i=0; i<magicianArray.length; i++){
        magician[i]=`The Great` + magicianArray[i]
    }
}


function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);