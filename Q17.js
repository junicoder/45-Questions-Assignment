// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ["Junaid", "Raza", "Abdul Sammad", "Rashid", "Nadeem", "Ali"];
guestList[2] = "Saqlain";
guestList.push("Sir Jahanzaib");
guestList.push("Sir Zia");
console.log("I just heard the new table won't arrive in time. I am sorry, guys. Let's plan some other time.");
while (guestList.length > 0) {
    console.log(`Just removed ${guestList.pop()}`);
    if (guestList.length === 2) {
        break;
    }
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]} The Plan is still good for us. Don't Forget to join.`);
}
export {};
