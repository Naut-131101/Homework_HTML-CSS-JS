function checkSpeed(speed) {
    let limitSpeed = 70;
    let maxPoint = 12;
    let point = 0;
    if (speed > limitSpeed) {
        point = Math.floor((speed - limitSpeed) / 5);
        if (point > maxPoint) {
            return "License suspended";
        } else {
            return `Speed: ${speed}/${limitSpeed} - Point: ${point}/${maxPoint}`;
        }
    } else if (speed >= 0 && speed <= limitSpeed) {
        return "OK";
    } else {
        return "Invalid Speed!";
    }
}

console.log(checkSpeed(80)); // Speed: 80/70 - Point: 2/12
console.log(checkSpeed(150)); // License suspended
console.log(checkSpeed(30)); // OK
console.log(checkSpeed(-199)); // Invalid Speed!