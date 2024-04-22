function Calc() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

le

let calc = new Calc();
let calc2 = new Calc();

calc.read(10, 11);
calc2.read(213, 123)
console.log(calc.sum(), calc2.mul());
