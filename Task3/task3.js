// Function to find the union of two arrays
function Unionarray(arr1, arr2) {
    let map = {};
    let commonArra = []
    // count all element 
    for (let num of arr1) {
        map[num] = (map[num] || 0) + 1
    }
    // check unique element
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]] && !commonArra.includes(arr2[i])) {
            commonArra.push(arr2[i])
        }
    }
    return commonArra
}
// example 
let arr1 = [1, 2, 2, 2, 3];
let arr2 = [2, 3, 3, 4, 5, 5];
// Function call
let uni = Unionarray(arr1, arr2);
console.log(uni)

