export function calculator() {
    if (znak.value == "+") {
        h1.innerText = result + (number1.value + number2.value);
    } else if (znak.value == "-") {
        h1.innerText = result + (number1.value - number2.value);
    } else if (znak.value == "*") {
        h1.innerText = result + number1.value * number2.value;
    } else if (znak.value == "/") {
        h1.innerText = result + number1.value / number2.value;
    } else {
        console.log("Ошибка");
    }
}
