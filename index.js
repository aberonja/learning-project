/*
NOTE: some inconsistencies in code are just to show different ways of doing things,
I wasn't sure should I use function or not in some places, or should I use arrow function or not
*/

// 1. object with random true/false values
const objectWithRandomValues = (arr = []) =>
  arr.reduce(
    (obj, el) => ((obj[el] = !!Math.floor(Math.random() * 2)), obj),
    {}
  );

console.log('Task 1:');
console.log(
  objectWithRandomValues(['isApple', 'isPear', 'isCucumber', 'isMelon'])
);

/*******************************************************************************************************************/
// 2. array of objects from array

const arrayOgObjectsFromArray = (arr = []) => {
  const arrayOfObjects = [];
  arr.forEach((el) => arrayOfObjects.push({ isTrue: el }));
  return arrayOfObjects;
};

console.log('Task 2:');
console.log(arrayOgObjectsFromArray([true, true, false, true, true]));

/*******************************************************************************************************************/
// 3. create array from object
const obj = { numberOne: 'Luigi', numberTwo: 'Mario' };
console.log('Task 3:');
console.log(Object.entries(obj));

/*******************************************************************************************************************/
// 4. Transform array
const array = [
  { name: 'Luigi', status: 'Number one' },
  { name: 'Mario', status: 'Number two' },
];

// const reformattedArray = array.map((obj, i) => {
//   const rObj = { ...obj };
//   rObj.label = obj.name;
//   rObj.value = i + 1;
//   return rObj;
// });
array.forEach((el, i) => {
  el.label = el.name;
  el.value = i + 1;
});

console.log('Task 4:');
// console.log(reformattedArray);
console.log(array);

/*******************************************************************************************************************/
// 5. numbers < 5

function isSmallerThan5(...array) {
  return array.reduce((acc, arr) => [...acc, ...arr]).filter((x) => x < 5);
}

console.log(`Task 5: 
${isSmallerThan5([1, 2, 3], [100, 2, 1, 10])}`);

/*******************************************************************************************************************/
// 6. return first object with name 'Mario'

const firstMario = array.find((el) => el.name === 'Mario');
console.log('Task 6:');
console.log(firstMario);

/*******************************************************************************************************************/
// 7. Union two arrays

// const unionOfArrays = (arr1 = [], arr2 = []) => [...arr1, ...arr2];
const unionOfArrays = (arr1 = [], arr2 = []) => [
  ...new Set([...arr1, ...arr2]),
]; // if we don't want elements to repeat
console.log(`Task7: 
${unionOfArrays([1, 7, 3], [1060, 2, 15, 10])}`);

/*******************************************************************************************************************/
// 8. Remove falsies
const removeFalsies = (arr = []) => arr.filter((e) => !!e);
console.log(
  `Task 8: 
  ${removeFalsies([
    NaN,
    1,
    'null',
    0,
    '0',
    15,
    false,
    -22,
    '',
    undefined,
    47,
    null,
  ])}`
);

/*******************************************************************************************************************/
// 9. odd numbers > 50
const elements = [
  1,
  3,
  44,
  78,
  29,
  161,
  707,
  1999,
  2,
  3,
  4,
  5,
  12,
  17,
  0,
  0,
  4,
  141,
  50,
  51,
  8,
  44,
];
const oddNumersGt50 = elements.filter((el) => el > 50 && el % 2 !== 0);
console.log('Task 9:');
console.log(oddNumersGt50);

/*******************************************************************************************************************/
// 10. multiply array elements by 2
const doubledElements = elements.map((el) => el * 2);
const doubledSecondTime = elements.reduce((acc, el) => [...acc, el * 2], []);

const doubledThirdTime = [];
for (let i = 0; i < elements.length; i++) {
  doubledThirdTime[i] = elements[i] * 2;
}
console.log('Task 10:');
console.log(doubledElements);
console.log(doubledSecondTime);
console.log(doubledThirdTime);

/*******************************************************************************************************************/
// 11. full name object
const myObject = [
  { Name: 'John', lastName: 'Doe', Age: 25, Capital: 'Novi Sad' },
  { Name: 'Jane', lastName: 'Doe', Age: 27, Capital: 'Vrbas' },
  { Name: 'Bob', lastName: 'Dilan', Age: 50, Capital: 'London' },
];
console.log('Task 11:');

const newEl = myObject.map((el) => ({
  fullName: `${el.Name} ${el.lastName}`,
  Age: el.Age,
}));
console.log(newEl);

/*******************************************************************************************************************/
// 12. remove duplicates from array

function removeDuplicats(arr = []) {
  return [...new Set([...arr])];
}

// function removeDuplicats(arr = []) {
//   return arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
// }

// function removeDuplicats(arr = []) {
//   return arr.filter((el, index) => arr.indexOf(el) === index);
// }
console.log('Task 12:');
console.log(removeDuplicats([1, 2, 2, 3, 4, 4, 5, 1]));

/*******************************************************************************************************************/
// 13. dividableByTen

function dividableByTen(arr = []) {
  return arr.filter((el) => el % 10 === 0);
}
console.log('Task 13:');
console.log(dividableByTen([2, 5, 15, 100, 43, 20, 13490, 40, 22]));

/*******************************************************************************************************************/
// 14. largestAndSmallest in array
function largestAndSmallest(arr = []) {
  return [Math.min(...arr), Math.max(...arr)];
}
// function largestAndSmallest(arr) {
//   return arr.reduce(() => [Math.min(...arr), Math.max(...arr)], []);
// }
console.log('Task 14:');
console.log(largestAndSmallest([2, 8, 130, 3, 1, 44]));

/*******************************************************************************************************************/
// 15. Reverse a string
function reverseMe(text = '') {
  return [...text].reverse().join('');
}
console.log('Task 15:');
console.log(reverseMe('Desko'));

/*******************************************************************************************************************/
// 16. Reverse a string
function reverseMeAgain(text = '') {
  return text.split('').reduce((rev, char) => char + rev, '');
}
console.log('Task 16:');
console.log(reverseMeAgain('Desko'));

/*******************************************************************************************************************/
// 17. Find a smallest number in an array dividable by 2
console.log('Task 17:');
console.log(elements.sort((a, b) => a - b).find((el) => el % 2 === 0));
// console.log(Math.min(...elements.filter((el) => el % 2 === 0)));

/*******************************************************************************************************************/
// 18. Return the range between two numbers
function range(start = 0, end = 0) {
  return Array(end - start > 0 ? end - start + 1 : start - end + 1)
    .fill()
    .map((_, idx) => (end - start > 0 ? start + idx : end + idx));
}
console.log('Task 18:');
console.log(range(3, 0));
console.log(range(9, 18));

/*******************************************************************************************************************/
// 19. Return a random number between 7 and 20
function getRandomNumber(min = 0, max = 0) {
  return Math.random() * (max - min) + min;
}
// integer numbers
function getRandomIntNumber(min = 0, max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Task 19:');
console.log(getRandomNumber(3, 10));
console.log(getRandomIntNumber(3, 10));

/*******************************************************************************************************************/
// 20. Merges two arrays of numbers, returning the new array

function merge(arr1 = [], arr2 = []) {
  return [...new Set([...arr1, ...arr2])];
}

// function merge(arr1, arr2) {
//   return [...arr1, ...arr2].reduce(
//     (acc, el) => (acc.includes(el) ? acc : [...acc, el]),
//     []
//   );
// }

console.log('Task 20:');
console.log(merge([1, 2, 3, 4, 5, 6], [2, 4, 8, 0, 10]));

/*******************************************************************************************************************/
// 21. Shuffle a passed array

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }
function shuffle(array = []) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
console.log('Task 21:');
console.log(shuffle([2, 5, 1, 6, 3]));
