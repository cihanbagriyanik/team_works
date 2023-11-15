function removeDuplicates(arr) {
    const array = [];

    for (const i of arr) {
        if (!array.includes(i)) {
            array.push(i);
        }
    }
    return array;
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(arrayWithDuplicates);
console.log(result); // Output: [1, 2, 3, 4, 5]