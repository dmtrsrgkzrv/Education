let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressCopy = { ...passportWithAddress, address: { ...passportWithAddress.address } };
passportWithAddressCopy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportWithAddressCopy.address.city);