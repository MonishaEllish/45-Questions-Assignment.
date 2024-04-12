let places : string[] = [`America` ,`Korea`, `Germany`,`Dubai` ,`New york`];
//priniting array init's orignal order.
console.log(`orignal` + places);
//printing array in alphabetical order without modifying the actaul list.
console.log(`copy` + [...places].sort());
//showing that array is in still in its oignal order.
console.log(`orignal` + places);
// printing array in reverse alphabetical order.
console.log(`copy` + [...places].sort(). reverse());
// array is still in it's orignal order.
console.log(`copy` + [...places].sort(). reverse());
// reversing the order of the list, showing order is changed 
console.log(`copy` + [...places].sort());
// reverse the order of the list ,showing back to its orignal order
console.log(`copy` + [...places].sort(). reverse());
// sort your arrayso it is stored in alphabetical order,showing the order ha been changed
console.log(`copy` + [...places].sort());




