var guest_list = ["Jabeen", "Shakeel", "Sehar", " Zain"];
//for(let i=0; i<guest_list.length; i++){
// console.log(`Dear`+ guest_list[i] + `\n\n You are invited for dinner. \n\nThankyou.`);
//}
// QUESTION NO : 15
var not_coming = "zain";
var new_guest = "sherry";
guest_list[3] = new_guest;
//for(let i=0; i<guest_list.length; i++){
// console.log(`Dear`+ guest_list[i] + `\n\n You are invited for dinner. \n\nThankyou.`);
//}
///console.log(`Mr` +not_coming ,`not coming for dinner.`);
// QUESTION NO :  16
guest_list.unshift("Ronaldo");
guest_list.splice(guest_list.length / 2, 2, "Messi");
guest_list.push("Babar Azam");
//for(let i=0; i<guest_list.length; i++){
// console.log(`Dear`+ guest_list[i] + `\n\n You are invited for dinner. \n\nThankyou.`);
//}
// QUESTION NO : 17
console.log("\n\nunfortunately we are out of space,so we have space for two guest only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry,Dear ".concat(removed_guest, ", You are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" + guest_list[i] + "\n\n You are still invited for dinner. \n\nThankyou.");
}
guest_list.splice(0, 2);
console.log(guest_list);
