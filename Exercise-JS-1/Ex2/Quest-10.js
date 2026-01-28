function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2) console.log(i); 
    }
}

console.log(showPrimes(15)); // 2 3 5 6 11 13