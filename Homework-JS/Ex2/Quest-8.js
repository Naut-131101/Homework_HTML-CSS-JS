function calculateGrade(marks) {
    let total = 0;

    for (const mark of marks) {
        total += mark;
    }

    // let average = total / marks.length;
    let average = Math.floor(total / marks.length);

    if (average >= 0 && average < 60) {
        return `Average: ${average} - Grade: F`;
    } else if (average < 70) {
        return `Average: ${average} - Grade: D`;
    } else if (average < 80) {
        return `Average: ${average} - Grade: C`;
    } else if (average < 90) {
        return `Average: ${average} - Grade: B`;
    } else return `Average: ${average} - Grade: A`;
}

console.log(calculateGrade([20, 40, 90])); // 50 - F
console.log(calculateGrade([20, 80, 90])); // 63 - D
console.log(calculateGrade([40, 80, 90])); // 70 - C
console.log(calculateGrade([80, 80, 90])); // 83 - B
console.log(calculateGrade([90, 90, 90])); // 90 - A