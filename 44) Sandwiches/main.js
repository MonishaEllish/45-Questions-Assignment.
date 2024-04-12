function makeSandwich(item) {
    console.log("Making your sandwich with:");
    item.forEach(function (element) { return console.log("- " + element); });
    console.log("Enjoy your sandwich!");
}
makeSandwich(["Ham", "lettuce", "chesse"]);
makeSandwich(["Turkey", "Bacon", "Tamato"]);
makeSandwich(["Peanut Butter", "cucumber", "chesse"]);
