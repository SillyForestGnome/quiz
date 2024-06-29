//1. extractValue
//Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of eachobject at the key. 

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue (arrOfObj, key){
   return arrOfObj.reduce(function (accum, obj){
        accum.push(obj[key]);
        return accum;
    }, []);
}

//extractValue(arr,'name');
// ['Elie', 'Tim', 'Matt', 'Colt']

//2. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in hte string. This function should be case insensitive so a lowercase letter and uppercase letter should count. 

let word = "Abracadabra it's magic";

//A. Using reduce & includes
function vowelCount (str){
    str = str.toLowerCase();
    const vowels = "aeiou";
    let arr = Array.from(str);
    return arr.reduce(function (accum, currentVal){
        if (vowels.includes(currentVal)){
            if (accum[currentVal]){
                accum[currentVal] ++; //add letter
            } else {
                accum[currentVal] = 1; //initialize
            }
        };
        return accum;
    }, {});
}

//B. Using reduce & indexOf
function vowelCount2(str){
    const vowels = "aeiou";
    return str.split(' ').reduce(function(acc, next){
        let lowerCased = next.toLowerCase();
        if (vowels.indexOf(lowerCased !== -1)){
            if (acc[lowerCased]){
                acc[lowerCased]++;
            }else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }), {};
}

//3. Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function. 

const instructors = [{name: 'Elie'}, {name: 'Tim'}, {name:'Matt'}, {name:'Colt'}];

//A. For in Loop, hasOwnProperty & reduce
//This version returns the new key and value before the already existing information in each object.
function addKeyAndValue (arrOfObj, key, val){
    return arrOfObj.reduce(function(accum, currentObj){
        let newObj = {};
        newObj[key] = val; //Add new key/value to new obj

        //Add existing properties of the current object
        for (let keyVal in currentObj){
            if (currentObj.hasOwnProperty(keyVal)){
                newObj[keyVal] = currentObj[keyVal];
            }
        }
        accum.push(newObj);//Add new obj to accum array
        return accum; //Return accum for next iteration
    }, []); //Start w empty array as initial value
}

//B. 3 parameters for callback function including index:
//This version returns the new key and value after the already existing information in each object
function addKeyAndValue2 (arr, key, value) {
    return arr.reduce(function(acc, next, idx){
        acc[idx][key] = value;
        return acc;
    }, arr);
}

//4. Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

//A.
const singleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(val){
    return val % 2 === 0;
}
//partition (singleNums, isEven);
// [[2, 4, 6, 8], [1, 3, 5, 7, 9]];

//B.
const firstNames = ['Elie', 'Colt', 'Tim', 'Matt'];

function isLongerThanThreeCharacters (val){
    return val.length > 3;
}
//partition(firstNames, isLongerThanThreeCharacters);
// [['Elie', 'Colt', 'Matt'], ['Tim']]


//FUNCTION
function partition (array, callback){
    return array.reduce(function(accum, currentVal){
        if (callback(currentVal)){
            accum[0].push(currentVal);//1st subarray
        } else {
            accum[1].push(currentVal);//2nd subarray
        }
        return accum;
    }, [[], []]);//Initialize with two empty subarrays
}

