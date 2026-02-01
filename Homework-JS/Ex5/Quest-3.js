function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new TypeError("Doi so dau tien khong phai la mang")
    }

    let count = 0;
    for (const key in array) {
        if (searchElement === array[key]) count++;
    }
    return count;
}

try {
    const numbers = [1, 2, 3, 4, 1];
    const count = countOccurrences(numbers, 1);
    console.log(count);
} catch (error) {
    console.error(error.message);
}