function countOccurrences(array, searchElement) {
    let count = 0;
    for (const key in array) {
        if (array[key] === searchElement) count++;
    }
    return count;
}

console.log(`Số lần xuất hiện của searchElement trong array: ${countOccurrences([1, 2, 3, 4, 5, 5], 5)}`)