function isLandscape(width, height) {
    if (width > height) return true;
    if (height > width) return false;
}

console.log(isLandscape(1, 2));
console.log(isLandscape(3, 1));