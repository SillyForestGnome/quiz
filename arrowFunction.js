//1. Map Callback
//Refactor code to use two arrow functions. Turn it into a one liner:

//Original
// function doubleReturn(arr) {
//     return arr.map(function(val) {
//         return val * 2;
//     });
// }

//Step 1 - Create one arrow function
function doubleArrow (arr) {
    return arr.map((val) => {
        return val * 2;
    });
};

//Step 2 - Create second arrow function
const doubleArrow2 = (arr) => {
    return arr.map((val)=> {
        return val * 2;
    });
}

//Step3 - Move to one line by using implicit return:
const doubleArrow3 = arr => arr.map(val => val*2);


//2. Replace ALL functions with arrow functions:

//Original
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    //Even numbers get filtered out in a new array and returned:
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return squares;
  }
  
//Step 1: Replace 1st Function:
function squareAndFindEvens1(numbers){
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
};

//Step 2: Replace 2nd function:
function squareAndFindEvens2(numbers) {
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}

//Step 3: Replace 3rd function:
const squareAndFindEvens3 = numbers => {
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}

//Step 4: Implicit Returns
const squareAndFindEvens4 = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);