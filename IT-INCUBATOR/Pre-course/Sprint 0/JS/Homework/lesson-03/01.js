const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

const createColorString = colors.filter(function (color) {
    return color === "черный" || color === "красный" || color === "желтый";
}).join("-");

console.log(createColorString);