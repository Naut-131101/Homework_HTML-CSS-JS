// Cách 1
// function getMax(array) {
//     let max = array[0];
//     if(array.length !== 0) {
//         for (const key in array) {
//             if(array[key] > max) max = array[key];
//         }
//         return max;
//     } else {
//         return undefined;
//     }
// }

// Cách 2
function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b)=>a>b?a:b);
}

console.log(getMax([10, -3, 5])); // 10
console.log(getMax([])); // undefined