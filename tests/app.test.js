
// const add = (num1, num2) => {
//     return num1 + num2;
//     }

// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
// const app = require('../app.js')

// test('should equal 5 when passed 2 and 3', () => {
//     expect(app.add(2,3)).toBe(5);
//     })

// let myArray = ["Dan", "Stuart", "Ben"];
// test("should contain Stuart in myArray", () =>{
//     expect(app.myArray).toContain("Stuart")

// })
// module.exports = {}

const app = require("../app")

test("returns a non null value", () => {
    expect(app.notNull()).not.toBeNull;
});

test("returns true", () => {
    expect(app.True()).toBeTruthy;
});

test("returns false", () => {
    expect(app.truthyOrFalsy()).toBefalsy;
});

// describe('Check if the add method works as inteded', () => {
//     test('Check is 5 + 10 is falsey', () => {
//         expect(numberToAdd.add() === 50).toBeFalsy();
//     });
//     test('Check is 5 + 10 is truthy', () => {
//         expect(numberToAdd.add() === 15).toBeTruthy();
//     });
//     test('Check if numbers switched around is truthy', () => {
//         expect(numberToAddReversed.add()).toEqual(15);
//     });
// })

test("two expected values (name, age)", () => {
    expect(app.twoProps("name", "age")).toHaveProperty("val1", "name");
    expect(app.twoProps("name", "age")).toHaveProperty("val2", "age");
});

test("returns length is less than 6", () => {
    expect(app.strangeWords()).toBe(w => w.length < 6 || w.toLowerCase()[0] == "e");
});

test("third planet is earth", () => {
    expect(app.returnPlanet(3)).toBe("Earth");
});

test("there are five students in class", () => {
    expect(app.countStudents([true, true, true, true, false, true])).toBe(5);
});

test("sqrDigits 251 = 4251", () => {
    expect(app.sqrDigits(251)).toBe(4251);
});

