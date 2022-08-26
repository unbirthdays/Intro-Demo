/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// Arrays exercise

let backpack = []; // Jon's empty backpack

backpack.push("sword"); // adds sword to backpack
backpack.push("shield"); // adds shield to backpack
backpack.push("food"); // adds food to backpack

backpack.shift(); // removes first item in backpack, aka his sword

let furCoat = "fur coat"; // assigning a fur coat as a variable
backpack.push(furCoat); // dynamically adding a fur coat to the backpack

backpack.pop(); // getting cold, John puts his fur coat on

let itemCount = backpack.length;

backpack.push("flint", "blanket", "knife", "toothbrush"); // Jon throws in all of these items at once!

let backpack2 = backpack.splice(2, 5); // Removing those items except the toothbrush from his overflowing backpack

console.log(backpack2[0]); // logging first item in second backpack

// Loops exercise

for (i = 0; i < backpack.length; i++) {
    console.log(backpack[i]);
}

for (i = 0; i < backpack2.length; i++) {
    console.log(backpack2[i]);
}

// logs what was in the backpack

for ( i = 0; i < 3; i++) {
    console.log(backpack[i]); // logs first three items in the first backpack
}

if (backpack.length >= 3) {
    for (i = 0; i < 3; i++) {
        console.log(backpack[i]); // level of safety to execute if applicable
    } 
} else {
    for (i = 0; i < backpack.length; i++) {
        console.log(backpack[i]); // else print if backpack length is 0-2
    }
}

// Control Flow Exercise

let guessMe = 54

while (guessMe < 100) {
    console.log('----------')
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5.  Added 25.')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.')
        guessMe -= 27
    } else {
        console.log('Added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}.`)
}
// final value of guessMe is 119