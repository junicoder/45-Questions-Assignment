/*Changing Guest List: You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
let guestList = ["Junaid", "Raza", "Nadeem", "Rashid", "Abdul Sammad"];
let skip = guestList.pop();
let newGuest = guestList.push("Saqlain");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, dinner at our place tonight! Delicious food and good vibes await. See you soon!`);
}
console.log(`${skip} was not able to make it.`);
export {};
