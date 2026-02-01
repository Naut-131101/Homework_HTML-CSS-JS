function arrayFromRange(min, max) {
    if (max < min) return [];

    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(arrayFromRange(1, 5)); // [1, 2, 3, 4, 5]
console.log(arrayFromRange(5, 1)); // []