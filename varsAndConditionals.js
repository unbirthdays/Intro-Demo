/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;


// Who is stronger?
if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie Lannister has better attack than Jon Snow");
} else {
    console.log("Jon Snow and Jamie Lannister have the same attack");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Will Jon die?
if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain.");
} else {
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

jonSnowDefense += 25;


// Will Jon die, except this time he somehow found a shield???
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain, except this time he had a shield.");
} else {
    health -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}.`);
}

// Oh, great. Here come's the townsfolk taking Jon's side with a health kit.
if ((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += 50;
}

// Jamie flips a coin. If it's heads, he will aim to take Jon's head. Tails and he runs.
let coinLandsHeads = false;

if (coinLandsHeads === true) { // can use coinLandsHeads !== false
    console.log("And so the fight continues...");
} else {
    console.log("Jon runs away!");
} // Normally for a random chance, I would include Math.floor(Math.random()) and set extra details

// Jamie attacks Jon five times. Will he survive?
for (let i = 0; i < 5; i++) {
    if (jonSnowHealth <= 0) {
        console.log("Jon Snow is... dead.");
    } else {
        jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
        console.log(`Jon Snow's health is ${jonSnowHealth}.`);
    }
}

/* 
This while loop will need the above commented out to work.
while (jonSnowHealth > 0) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is ${jonSnowHealth}.`);
    if (jonSnowHealth <= 0) {
        console.log("Jon was meant to die.");
    }
}
*/