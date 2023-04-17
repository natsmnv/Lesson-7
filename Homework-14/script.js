// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

let num = prompt(`Enter your number: `);
while(isNaN(num)) {
    num = prompt(`Enter your number: `);
}

let degree = prompt(`Enter degree: `);
while(isNaN(degree)) {
    degree = prompt(`Enter degree: `);
}

function pow(num, degree) {
    let newNum = 1;

    if (degree < 0) {
        let value = 1;
        while (degree !== 0) {
            value *= num;
            degree++;
        }
        newNum = 1 / value;
    }else if (degree > 0) {
        while (degree !== 0) {
            newNum *= num;
            degree--;
        }
    }else {
        newNum = 1;
    }
    return newNum;
}

console.log(pow(num, degree));