function except(array, array_recycle) {
    const array_new = [];

    for (let i = 0; i < array.length; i++) {
        let isArray_recycle = false;

        for (let j = 0; j < array_recycle.length; j++) {
            if (array[i] === array_recycle[j]) {
                isArray_recycle = true;
                break;
            }
        }

        if (!isArray_recycle) {
            array_new.push(array[i]);
        }
    }

    return array_new;
}

console.log(except([1, 2, 3, 4, 5],[5]))