function countTruthy(array) {
    let count = 0;
    for (const value of array) {
        count++;
    }
    return count;
}

let array = [1, 2, 3, 4, 5, 8]
console.log(countTruthy(array)); // 6