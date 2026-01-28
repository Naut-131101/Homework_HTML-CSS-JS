function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(includes([1, 2, 3, 4], 3));
console.log(includes(['a', 'b', 'c'], 'd'));