function arrayFromRange(min, max) {
    if (max < min) return [];

    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(arrayFromRange(1, 5));
console.log(arrayFromRange(5, 1));