// Task 1

export function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

//Task 2
export function formatArrayStrings(strings, numbers) {
    return strings.map((str, i) => numbers[i] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}

let numbers = [1, 2, 3, 4, 5];
let processedNumbers = processArray(numbers);
console.log(processedNumbers);

let strings = ['hello', 'world'];
let formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);




