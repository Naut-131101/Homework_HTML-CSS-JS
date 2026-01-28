function getMax(array) {
    let max = array[0];
    if(array.length !== 0) {
        for (const key in array) {
            if(array[key] > max) max = array[key];
        }
        return max;
    } else {
        return undefined;
    }
}

console.log(getMax([10, -3, 5])); // -3
console.log(getMax([])); // undefined