const prompt = require('readline-sync');

const numberOfFriends = prompt.question("Please input a number: ");

let friendInput = [];
for (let i = 0; i < numberOfFriends; i++) {
    friendInput[i] = prompt.question(`Friend ${i + 1}, Please input the 2 numbers:`);
}

let friends = [];
for (let i = 0; i < numberOfFriends; i++) {
    const friendInfo = friendInput[i].split(/ +/g); //splits by space (any number of spaces)
    friends[i] = {};
    friends[i].p = parseInt(friendInfo[0]);
    friends[i].w = parseInt(friendInfo[1]);
    //P = init pos, W = 1 meter per w, D = hearing range
}

let distanceTimeSum = 0;
let timeSum = 0;
for (i in friends) {
    distanceTimeSum += friends[i].p * friends[i].w;
    timeSum += friends[i].w;
}
let averagePos = Math.round(distanceTimeSum / timeSum);

let concertPos = averagePos;
let currentSum = getTimeSum(friends, concertPos);
let step = Math.floor(concertPos / 2);
let done = false;

console.log(`Starting pos: ${concertPos}`);
console.log(`Starting step: ${step}`);

while (done == false) {
    let stepForwardSum = getTimeSum(friends, concertPos + step);
    let stepBackwardSum = getTimeSum(friends, concertPos - step);

    if (currentSum > stepForwardSum) {
        concertPos += step;
        console.log(`current concert pos: ${concertPos} (increased)`);
    } else if (currentSum > stepBackwardSum) {
        concertPos -= step;
        console.log(`current concert pos: ${concertPos} (decreased)`);
    } else if (currentSum <= stepForwardSum && currentSum <= stepBackwardSum && step == 1) {
        done = true;
    } else {
        step = Math.floor(step / 2);
        console.log(`CHANGE STEP TO: ${step}`);
    }

    currentSum = getTimeSum(friends, concertPos);
}

console.log("Final pos: " + concertPos);
console.log("Sum: " + currentSum);

function getTimeSum(friends, concertPos) {

    let sum = 0;
    for (i in friends) {
        sum += Math.abs(((concertPos - friends[i].p) * friends[i].w));
    }
    return sum;
}
