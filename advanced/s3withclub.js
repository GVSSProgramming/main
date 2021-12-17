const prompt = require('readline-sync');

const numberOfFriends = prompt.question('Input the number of friends: ');
let friendInfoArr = [];

for (let i = 0; i < numberOfFriends; i++){
    friendInfoArr[i] = prompt.question('Please input the 2 numbers: ');
}

const friends = [];
for (let i = 0; i < numberOfFriends; i++){
    const arr = friendInfoArr[i].split(" ");
    friends[i] = {};
    friends[i].pos = parseInt(arr[0]);
    friends[i].speed = parseInt(arr[1]);
}

let avgSum = 0;
for (let i = 0; i < numberOfFriends; i++){
    avgSum += friends[i].pos
}
const avgPos = avgSum/numberOfFriends;

let step = Math.floor(avgPos/2);
let currentPos = Math.round(avgPos);
let currentPosTime = getTimeSum(friends, currentPos);
let done = false;
while(done == false){
    stepUpPosTime = getTimeSum(friends, currentPos + step);
    stepDownPosTime = getTimeSum(friends, currentPos - step);

    if (currentPosTime > stepUpPosTime){
        currentPos += step;
    } else if (currentPosTime > stepDownPosTime){
        currentPos -= step;
    } else if (currentPosTime <= stepUpPosTime && currentPosTime <= stepDownPosTime && step == 1){
        done = true;
    } else {
        step = Math.floor(step/2);
    }
    currentPosTime = getTimeSum(friends, currentPos);
}

console.log("Sum: " + currentPosTime)


function getTimeSum(friends, pos){
    let sum = 0;
    for (let i = 0; i < numberOfFriends; i++){
        sum += Math.abs((pos - friends[i].pos)*friends[i].speed);
    }
    return sum;
}
