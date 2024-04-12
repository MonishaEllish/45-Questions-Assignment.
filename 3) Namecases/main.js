// lowercase
var personsName = "Monisha Ellish";
console.log("lowercase:", personsName.toLowerCase());
// uppercase
console.log("uppercase:", personsName.toUpperCase());
// titlecase
console.log("titlecase:", personsName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
