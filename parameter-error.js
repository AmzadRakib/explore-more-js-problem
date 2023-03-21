function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please insert number type data';
    }
    else {
        return num1 + num2;
    }
}

const output = add(22, '22');
console.log(output);