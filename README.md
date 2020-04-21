# FE tasks

### Create a navigation in restaurant project that will contain ('Desko', 'Bojana') links and when we click on your name it will navigate us to your page in the new tab where we can open DevTools and see the results logged in the console. Please, mark the results with a number of the selected task.

#### Write a function that

1. Returns an object with RANDOM true/false values from this array.
[‘isApple’, ‘isPear’, ‘isCucumber’, ‘isMelon’] => {isApple: true, isPear: false, isCucumber: false, isMelon: true}

2. Returns an array of objects from a simple array.
[true, true, false, true, true] => [{isTrue: true}, {isTrue: true}, {isTrue: false}, {isTrue: true}, {isTrue: true}]

3. Creates an array from object and returns it.
const obj = { numberOne: ‘Luigi’, numberTwo: ‘Mario’} => [[‘numberOne’, ‘Luigi’], [‘numberTwo’, ‘Mario’]]

4. Transforms an array and returns it. 
[{name: ‘Luigi’, status: ‘Number one’}, {name: Mario’, status: ‘Number two’}] =>
[{label: ‘Luigi’, value: 1, status: ‘Number one’, name: ‘Luigi’}, {label: Mario’, value: 2, status: ‘Number two’, name: ‘Mario’}]

5. Finds numbers that are smaller than 10 from these two arrays [1, 2, 3], [100, 2, 1, 10] and returns it as an array.
Expected result => [1, 2, 3, 2, 1]

6. Selects the first object that has the name ‘Mario’ from the array in #4 and return it.

7. Unions two arrays [1, 7, 3], [1060, 2, 15, 10]

8. Removes. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
[NaN, 1, ‘null’, 0, ‘0’, 15, false, -22, '',undefined, 47, null]

9. Returns a new array of odd numbers larger than 50 in a one liner from an array.
[1, 3, 44, 78, 29, 161, 707, 1999, 2, 3, 4, 5, 12,17, 0, 0, 4, 141, 50, 51, 8, 44]

10. Returns a new array that contains all numbers multiplied by two from the array above (#9). Use 3 different ways to accomplish it.

11. Returns an array of objects containing just fullName and age properties. Use a one-liner for this.
[{
Name: ‘John’,
lastName: ‘Doe’,
Age: 25,
Capital:  ‘Novi Sad’
}, {..}, {..}]

12. Will remove duplicates from array and returns new array.
Example: removeDuplicats(arr)

13. Will return a new array of all the numbers that could be divided by 10 (getting the whole number)
Example: dividableByTen(arr)

14. Finds the largest and the smallest numbers in an array and returns a new array of those two values.
Example: largestAndSmallest(arr)

15. Reverses a string and returns it.
Example: reverseMe(string)

16. Same as above, do it differently.

17. Finds a smallest number in an array(#9) dividable by 2. Use an one-liner.

18. Returns the range between two numbers.
Example: range(3, 0) [0, 1, 2, 3]

19. Returns a random number between 7 and 20

20. Merges two arrays of numbers, returning the new array - removing the duplicates
Example: merge(arr1, arr2)

21. Shuffles a passed array and returns it.
Example: shuffle(arr)
