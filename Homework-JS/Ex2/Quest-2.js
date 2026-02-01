function isLandscape(width, height) {
    if (width > height) {
        return true;
    } else { return false; }
}

console.log(isLandscape(1, 2)); // false
console.log(isLandscape(3, 1)); // true