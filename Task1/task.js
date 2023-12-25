
function getUniqueArray(arr) {
    const obj = {};
    const uniqueArray = [];

    // Iterate through the array using for loop 
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Check if the element exists in the obj 
        if (!obj[element]) {
            // If it doesn't exist, add it to the occurrence object and uniqueArray
            obj[element] = true;
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}
// Example usage:
const array = [1, 2, 2, 3, 4, 4, 5, 8, 8, 6, 6, 7];
const uniqueElementsArray = getUniqueArray(array);
console.log(uniqueElementsArray); 