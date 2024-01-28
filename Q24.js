"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
let myName = "Muhammad Junaid";
console.log(myName == "Muhammad Junaid");
console.log(myName != "Muhammad Junaid");
console.log(myName.toLowerCase() == "Muhammad Junaid");
console.log(myName.toLowerCase() != "Muhammad Junaid");
let aNum = 26;
console.log(aNum < 50);
console.log(aNum > 50);
console.log(aNum != 27 && aNum < 26);
console.log(aNum < 1 || aNum == 26);
let aList = ["Raffey", "Junaid", "Raza"];
console.log(aList.includes("Raza"));
console.log(aList.includes("Rashid"));
console.log(!aList.includes("Raza"));
console.log(!aList.includes("Rashid"));
