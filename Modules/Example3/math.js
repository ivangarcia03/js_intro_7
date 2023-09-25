export const add = (num1, num2) => {
    return num1 + num2;
};

export const substract = (num1, num2) => {
    return num1 - num2;
}

// class example
class MathClass {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    substract() {
        return this.num1 - this.num2;
    }
    add() {
        return this.num1 + this.num2;
    }
}

export default MathClass;