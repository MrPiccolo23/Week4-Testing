
// const add = (num1, num2) => {
//     return num1 + num2;
//     }

// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
// const app = require("../app.js")

// test('should equal 5 when passed 2 and 3', () => {
//     expect(app.add(2,3)).toBe(5);
//     })

// let myArray = ["Dan", "Stuart", "Ben"];

// test("should contain Stuart in myArray", () =>{
//     expect(app.myArray).toContain("Stuart")

// })
// module.exports = { }



// Challenge 1: To make sure what is returned is not ‘null’

function notNull(){
    return 4;
}


// Challenge 2: A value that is truthy

function True() {
    return true;
}
// Challenge 3: A value that is not falsy

function truthyOrFalsy(a) {
    return !!a;
}

// function Calc(firstNumber, secondNumber) {
//     this.firstNumber = firstNumber;
//     this.secondNumber = secondNumber;
//     this.add = function() {
//         return this.firstNumber + this.secondNumber;
//     }
// }

// const numberToAdd = new Calc(5, 10);
// const numberToAddReversed = new Calc(10, 5);



// Challenge 4: Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function
function twoProps(val1, val2) {
    return {
        val1: val1,
        val2: val2,
    };
}
// Challenge 5: A function that will return items in an array with 6 or more characters

function strangeWords(words) {
    return words.filter(w => w.length < 6 || w.toLowerCase()[0] == "e");
}

console.log(strangeWords(["taco", "eggs", "excellent", "exponential", "artistic", "cat", "eat"]));
// Challenge 6: Can you refractor any of your code?

// Challenge 7: Convert a number to a string

// Challenge 8: Display the correct planet with the number order it is away from the sun (planet(3) //will return ‘Earth’

function returnPlanet(int) {
    planets = ["Mercury", "Venus", "Earth", "Mars", "etc"];
    return planets[int - 1];
}

// Challenge 9: Count the amount of students present in the class. With an array or boolean values, count how many students are present (true =present) ([true, true, true, false, true] //will return 5)
function countStudents(register) {
    trueCnt = 0;
    for (const i in register) {if (register[i]) {
        trueCnt += 1;
    }
    }
    return trueCnt;
}
// Challenge 10: Square every digit and concatenate them (must return an integer) (squareDigi(34) //will return 916)


// Challenge 11: Given a year return back the century it is in (century(1705) //will return 17)
// Challenge 12: With an array of ones and zeroes, convert the equivalent binary value to an integer (binary([0, 0, 0, 1]) //will return 1) (binary([0, 1, 0, 0]) //will return 4)

module.exports = {
    notNull,
    True,
    truthyOrFalsy,
    twoProps,
    strangeWords,
    returnPlanet,
    countStudents,

};