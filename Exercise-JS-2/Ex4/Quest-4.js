function move(array, index, offset) {
    const position = index + offset;

    if (position < 0 || position >= array.length) return console.error('Invalid offset');

    const result = [...array];
    const element = result.splice(index, 1)[0];
    result.splice(position, 0, element);
    return result;
}

const numbers = [1, 2, 3, 4];

console.log(`Đã di chuyển: ${move(numbers, 1, 2)}`);
console.log(`Array gốc: ${numbers}`); 

console.log(move(numbers, 0, -1));