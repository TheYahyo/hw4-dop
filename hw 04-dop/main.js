function doubleElements(arr) {
    const result = arr.map(x => x * 2);
    return result;
}

const originalArray = [1, 2, 3, 4, 5];
const resultArray = doubleElements(originalArray);
console.log( originalArray);
console.log( resultArray);