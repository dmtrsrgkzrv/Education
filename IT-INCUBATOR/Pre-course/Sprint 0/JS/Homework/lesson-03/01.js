const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(function (color) {
        return color === "черный" || color === "красный" || color === "желтый";
    })
    .join("-");
}

console.log(createColorString());