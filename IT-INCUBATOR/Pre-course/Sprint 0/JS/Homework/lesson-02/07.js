let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedCopy = { ...passportMarried, married: true, address: { ...passportMarried.address } };
passportMarriedCopy.married = true;

console.log(passportMarried);
console.log(passportMarriedCopy);
console.log(passportMarriedCopy.married);