// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("shuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
      const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
      const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
      expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
      expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function expression that takes an array as a parameter. (shuffle)
// Have the function invoke the shift method, on the given parameter, to remove the first element from the array.
// create a variable that invokes the sort method on the given parameter. (shufArray)
    // Within sort, include two parameters that will represent any two elements for comparison. The sort method will return a random number subtracted from 0.5. This will give a different value to each element index for each time the function is ran, changing the index value of each element in the array.
// Have the function return the newly declared variable.
// Run the function using the given challenge parameters.

const shuffle = (colors) => {
  return colors.slice(1).sort(() => Math.random()-0.5)
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("smallLarge", () => {
  
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    
      expect(smallLarge(nums1)).toEqual([-8, 90]);
      // Expected output: [-8, 90]

      expect(smallLarge(nums2)).toEqual([5, 109])
      // Expected output: [5, 109]
  })
})

// b) Create the function that makes the test pass.

// Declare a function called minToMax.
// Set parameter to numArray.
// Use the Math.min and Math.max with the spread operator to return the min and max of each array.
// Return numArray

// [Math.min(...array), Math.max(...array)]

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe ("removeDuplicates", () => {
  it(" takes in two arrays and returns one with no duplicates", () => {
      expect(removeDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// Declare a function called noDuplicates
// Pass parameters: array1, array2
// Delcare a varibale called comboArray.
// Use .concat to combine arrays. Give comboArray the value -- array1.concat(array2)
// The Set method holds any value and creates a collection of instances of the values.  The values being passed in can only be used once. Therefore preventing duplicate values.
// Declare a varibale called newArray and give it the value [...new Set(comboArray)]
// Return newArray

// const noDuplicates = (array1, array2) => {
//   let newArray = array1.concat(array2)
//   return newArray = [...new Set(newArray)]
// }

// const unrepeatable = (...testArray) => {
//   const combineArrays = [].concat(...testArray)
//   return combineArrays.filter((value, index, array) => {
//       return array.indexOf(value) === index
//   })
// }