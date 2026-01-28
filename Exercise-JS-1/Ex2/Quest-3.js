function fizzBuzz(input) {
    if (typeof input === 'number') {
        if (input % 3 === 0) {
            if (input % 5 === 0) {
                return "FizzBuzz";
            }
            return "Fizz";
        } else if (input % 5 === 0) {
            if (input % 3 === 0) {
                return "FizzBuzz";
            }
            return "Buzz";
        } else {
            return input;
        }
    } else {
        return "Not a number";
    }
}

console.log(fizzBuzz(9)); // Fizz
console.log(fizzBuzz(10)); // Buzz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz('SOS')); // Not a number