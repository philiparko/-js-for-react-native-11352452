//Task 3
export function createUserProfiles(names, modifiedNames) {
    return names.map((name, i) => ({
        originalName: name,
        modifiedName: modifiedNames[i],
        id: i + 1
    }));
}


import { processArray, formatArrayStrings } from './arrayManipulation.js';

let names = ['Gabriel', 'Charity'];
let numbers = [7, 8];
let processedNumbers = processArray(numbers);
let modifiedNames = formatArrayStrings(names, processedNumbers);

let userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
