function sumOddNumbers(n) {
    if (n < 0) {
        return 0;
    }

    let result = 0;
    let i = n;

    while (i > 0) {
        result += i;
        i -= 2;
    }

    return result;
}

let number = 5;
let result = sumOddNumbers(number);
console.log(`The sum of odd numbers up to ${number} is: ${result}`);
