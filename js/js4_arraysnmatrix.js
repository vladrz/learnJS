let array = [2 , "123"];
console.log(array);



console.log(array.length);

array[2] = 5; // adding new elem


array[56] = true
console.log(array); // output:(57) [2, "123", 5, empty × 53, true]

array.pop(); // drop last elem
array.push('elem'); // add elem to tail
array.shift(); // drop 1st elem
array.unshift('1stelem'); // analogic


let arr = new Array(); //creating by class


let matrix = new Array([1,3] , [3,6]); // matrix 2x2
console.log(matrix[1][1]); // output 6
