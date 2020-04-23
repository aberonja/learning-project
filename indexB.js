//assignment1
const arrVege = ['isApple', 'isPear', 'isCucumber', 'isMelon'];
const randomValues = (arr) =>
  arr.reduce((obj, el) => ((obj[el] = !Math.round(Math.random())), obj), {});

console.log('(1)', randomValues(arrVege));

//assignment2
const arrObj = [true, true, false, true, true];
const objectValidation = (arr) => {
  const validation = [];
  arr.forEach((a) => validation.push({ isTrue: a }));
  return validation;
};

console.log('(2)', objectValidation(arrObj));

//assignment3
const objectName = { numberOne: 'Luigi', numberTwo: 'Mario' };
const arrayObj = (obj) => {
  const arr = Object.entries(obj);
  return arr;
};

console.log('(3)', arrayObj(objectName));

// assignement 4
var objectProp = [
  { name: 'Luigi', status: 'Number one' },
  { name: 'Mario', status: 'Number two' },
];
const addNewProp = (arr) => {
  arr.map((v, i) => {
    v.label = v.name;
    v.value = i + 1;
  });
  return arr;
};

console.log('(4)', addNewProp(objectProp));

//assignement 5
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const arrayLessThenTen = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2].filter((el) => el < 10);
  return newArray;
};

console.log(' (5) ', arrayLessThenTen(arr1, arr2));

// assignement 6
var res = [
  { name: 'Luigi', status: 'Number one' },
  { name: 'Mario', status: 'Number two' },
];
const nameMatch = (arr) => {
  let newArr = arr.find((x) => x.name === 'Mario');
  return newArr;
};

console.log('(6) ', nameMatch(res));

// assignement 7
const arrFirst = [1, 7, 3];
const arrSecond = [1060, 2, 15, 10];
const arrayCon = (arr1, arr2) => {
  let concatArrays = [];
  concatArrays = [...arr1, ...arr2];
  return concatArrays;
};

console.log(' (7) ', arrayCon(arrFirst, arrSecond));

// assignement 8
const arr = [NaN, 1, 'null', 0, '0', 15, false, -22, '', undefined, 47, null];
const withoutNan = (arr) => {
  const newArray = arr.filter((a, i) => arr[i]);
  return newArray;
};

console.log(' (8) ', withoutNan(arr));

// assignement 9
const arrOfNumbers = [
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

const newArray = arrOfNumbers.filter((el) => el % 2 != 0 && el > 50);

console.log(' (9) ', newArray);

// assignement 10
const newArray2 = arrOfNumbers.map((e) => {
  return e * 2;
});

console.log(' (10) ', newArray2);

const newArray3 = Array.from(arrOfNumbers, (x) => x + x);

console.log(' (10a) ', newArray3);

const doubleArr = (array) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = array[i] * 2;
  }
  return newArr;
};

console.log(' (10b) ', doubleArr(arrOfNumbers));

// assignement 11
const object = [
  { Name: 'John', lastName: 'Doe', Age: 25, Capital: 'Novi Sad' },
  { Name: 'Bo', lastName: 'Smith', Age: 27, Capital: 'Belgrade' },
  { Name: 'Max', lastName: 'JoJo', Age: 29, Capital: 'London' },
];
const keyArray = object.map((item) => {
  const newArrObj = {
    fullName: ` ${item['Name']} ${item['lastName']} `,
    age: item['Age'],
  };
  return newArrObj;
});

console.log('(11)', keyArray);

// assignement 12
const arrayNumb = [1, 4, 2, 3, 1, 5, 7, 3, 1];
const removeDuplicate = (data) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};

console.log(' (12) ', removeDuplicate(arrayNumb));

// assignement 13
const arrNumb = [10, 34, 15, 30, 1, 50, 75, 38, 19];
const dividableByTen = (arrNumb) => arrNumb.filter((val) => val % 10 == 0);

console.log(' (13) ', dividableByTen(arrNumb));

// assignement 14
const arrMaxMin = [10, 34, 15, 30, 1, 50, 75, 38, 19];
const smallestBiggest = (arr) => {
  const newArr = [Math.min(...arr), Math.max(...arr)];
  return newArr;
};

console.log(' (14) ', smallestBiggest(arrMaxMin));

// assignement 15
const word = 'abrakadabra';
const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

console.log(' (15) ', reverseString(word));

// assignement 16
const word1 = 'abrakadabra';
const reverseStringRecursion = (str) => {
  str === '' ? '' : reverseStringRecursion(str.substr(1)) + str.charAt(0);
  return str;
};

console.log(' (16) ', reverseStringRecursion(word1));

// assignement 17
const array = [1, 6, 8, 12, 48];
const minEvenNumb = (arr) => {
  let array = Math.min(...arr.filter((arr) => arr % 2 === 0));
  return array;
};

console.log(' (17) ', minEvenNumb(array));

// assignement 18
const range = (start, end) => {
  let array = Array.from(Array(end - start + 1), (_, i) => start + i * 1);
  return array;
};

console.log(' (18) ', range(6, 15));

// assignement 19
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(' (19) ', randomInteger(7, 20));

// assignement 20
const arrayConcat = (arr1, arr2) => {
  let array = [...new Set([...arr1, ...arr2])];
  return array;
};

console.log(' (20) ', arrayConcat([1, 4, 2, 3, 1], [1, 6, 8, 2]));

// assignement 21
const numbers = [1, 4, 2, 3, 1, 34, 75, 90];
const shuffle = (arrS) => {
  const shuffArr = arrS.sort(() => Math.random() - 0.5);
  return shuffArr;
};

console.log(' (21) ', shuffle(numbers));
