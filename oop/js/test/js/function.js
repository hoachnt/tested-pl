function calculator(znak, sum, minus) {
    if(znak === "+") return sum()

    return minus()
}
function sum() {
    console.log(a + b)
}
function minus() {
    console.log(a - b)
}

let a = 12
let b = 60
let znak = "-"

calculator(znak, sum, minus)
