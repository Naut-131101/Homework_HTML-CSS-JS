function calculateGrade(marks) {
    let total = 0;

    for (const mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    if (average >= 0 && average < 60) {
        return "F";
    } else if (average < 70) {
        return "D";
    } else if (average < 80) {
        return "C";
    } else if (average < 90) {
        return "B";
    } else return "A";
}

console.log(calculateGrade([20, 40, 90])); // F
console.log(calculateGrade([90, 40, 90])); // C