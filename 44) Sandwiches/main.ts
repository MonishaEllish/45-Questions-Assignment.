function makeSandwich (item:string[]){
    console.log(`Making your sandwich with:`);

    item.forEach(element =>  console.log("- " + element) );

    console.log(`Enjoy your sandwich!`)
}

makeSandwich([`Ham`,`lettuce`,`chesse`]);

makeSandwich([`Turkey`,`Bacon`,`Tamato`]);

makeSandwich([`Peanut Butter`,`cucumber`,`chesse`]);