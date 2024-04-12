var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["America", "Korea", "Germany", "Dubai", "New york"];
//priniting array init's orignal order.
console.log("orignal" + places);
//printing array in alphabetical order without modifying the actaul list.
console.log("copy" + __spreadArray([], places, true).sort());
//showing that array is in still in its oignal order.
console.log("orignal" + places);
// printing array in reverse alphabetical order.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
// array is still in it's orignal order.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
// reversing the order of the list, showing order is changed 
console.log("copy" + __spreadArray([], places, true).sort());
// reverse the order of the list ,showing back to its orignal order
console.log("copy" + __spreadArray([], places, true).sort().reverse());
// sort your arrayso it is stored in alphabetical order,showing the order ha been changed
console.log("copy" + __spreadArray([], places, true).sort());
