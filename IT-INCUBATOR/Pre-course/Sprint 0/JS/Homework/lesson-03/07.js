const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

const evenNumbers = numbers
.map(row => row.map(number => number % 2 === 0 ? number : null))
.map(row => row.filter(number => number !== null))

console.log(evenNumbers);