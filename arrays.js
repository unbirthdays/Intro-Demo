/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

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

