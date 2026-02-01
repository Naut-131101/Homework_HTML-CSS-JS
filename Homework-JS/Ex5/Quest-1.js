function sum(...items) {
  let result = 0;
  for (const key in items) {
    result += Array.isArray(items[key]) ?
        items[key].reduce((a, b) => a + b, 0) : items[key];
  }
  return result;
}


console.log(sum(2, [1, 2, 3, 4])); // 12
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum(1, 2, 3, 4));  // 10