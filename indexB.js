//assignment1
let arrVege = ['isApple', 'isPear', 'isCucumber', 'isMelon'];
const boolRandom = () => {
  let res = [];
  for (let i = 0; i < arrVege.length; i++) {
    obj = { name: arrVege[i], bool: Math.random() >= 0.5 };
    res.push(obj);
  }
  return res;
};
console.log(' (1) ', boolRandom());

//assignment2
const arrObj = [true, true, false, true, true];
const objectTrue = (arr) => {
  const validation = [];
  arr.forEach((a) => validation.push({ isTrue: a }));
  return validation;
};
console.log('(2)', objectTrue(arrObj));

// assignement 3
const objectName = { numberOne: 'Luigi', numberTwo: 'Mario' };
const arrayObj = () => {
  let arr1 = [];
  arr1.push('numberOne');
  arr1.push(objectName.numberOne);
  let arr2 = [];
  arr2.push('numberTwo');
  arr2.push(objectName.numberTwo);
  let arr = [arr1, arr2];
  return arr;
};
console.log('(3)', arrayObj());

// assignement 4
var objectProp = [
  { name: 'Luigi', status: 'Number one' },
  { name: 'Mario', status: 'Number two' },
];
const addNewProp = () => {
  objectProp.forEach((v) => {
    v.label = v.name;
    v.value = v.status;
    if (v.status === 'Number one') {
      v.value = 1;
    } else {
      v.value = 2;
    }
  });

  return objectProp;
};
console.log('(4)', addNewProp());

//assignement 5
const arrayLessThenTen = (arr3, arr4) => {
  let array3 = arr3.concat(arr4);
  let newArray = [];
  for (let i = 0; i < array3.length; i++)
    if (array3[i] < 10) {
      newArray.push(array3[i]);
    }
  return newArray;
};
console.log(' (5) ' + arrayLessThenTen([1, 2, 3], [100, 2, 1, 10]));

// assignement 6
var res = [
  { name: 'Luigi', status: 'Number one' },
  { name: 'Mario', status: 'Number two' },
];
const nameMatch = () => {
  let k = -1;
  let i = 0;
  while (i < res.length && k < 0) {
    if (res[i].name == 'Mario') {
      k = i;
    }
    i++;
  }
  return res[k];
};
console.log('(6) ', nameMatch());

// assignement 7
const arrayCon = () => {
  let arr1 = [1, 7, 3];
  let arr2 = [1060, 2, 15, 10];
  let concatArrays = arr1.concat(arr2);
  let arrayUnion = [];
  arrayUnion.push(concatArrays);
  return arrayUnion;
};
console.log(' (7) ', arrayCon());

// assignement 8
arr = [NaN, 1, 'null', 0, '0', 15, false, -22, '', undefined, 47, null];
const withoutNan = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(' (8) ', withoutNan(arr));

// assignement 9
arr = [
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
let newArray1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 && arr[i] > 50) newArray1.push(arr[i]);
}
console.log(' (9) ', newArray1);

// assignement 10
let newArray2 = arr.map((e) => {
  return e * 2;
});
console.log(' (10) ', newArray2);

// assignement 11
const object = [
  { Name: 'John', lastName: 'Doe', Age: 25, Capital: 'Novi Sad' },
  { Name: 'Bo', lastName: 'Smith', Age: 27, Capital: 'Belgrade' },
  { Name: 'Max', lastName: 'JoJo', Age: 29, Capital: 'London' },
];

let nameAge = object.map((element) => {
  let newArr = [];
  newArr.push(element.Name, element.Age);
  return newArr;
});
console.log('(11)', nameAge);

// assignement 12
let array2 = [1, 4, 2, 3, 1, 5, 7, 3, 1];
const removeDuplicate = (data) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};
console.log(' (12) ', removeDuplicate(array2));

// assignement 13
const arrNumb = [10, 34, 15, 30, 1, 50, 75, 38, 19];
const dividableByTen = (arrNumb) => arrNumb.filter((val) => val % 10 == 0);
console.log(' (13) ', dividableByTen(arrNumb));

// assignement 14
const arrMaxMin = [10, 34, 15, 30, 1, 50, 75, 38, 19];
const smallestBiggest = (arr) => {
  let newArr = [];
  arr.forEach(() => {
    newArr[0] = Math.min.apply(Math, arr);
    newArr[1] = Math.max.apply(Math, arr);
  });
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
const minEvenNumb = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return Math.min(...newArr);
};
console.log(' (17) ', minEvenNumb([1, 6, 8, 12, 48]));

// assignement 18
const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};
let resultOfRange = range(6, 15);
console.log(' (18) ', resultOfRange);

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
const shuffle = (arr) => {
  let newArr = arr.sort(() => Math.random() - 0.5);
  return newArr;
};
console.log(' (21) ', shuffle([1, 4, 2, 3, 1, 34, 75, 90]));
