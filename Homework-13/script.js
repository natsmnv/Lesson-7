// Реалізуйте функцію generateKey(length, characters), яка повертає рядок 
// випадкових символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function generateKey(length, characters) {
//     let str = '';
//     for (let i = 0; i < length; i++) {
//         let pos = Math.floor(Math.random() * length);
//         str += characters.substring(pos, pos+1);
//     }
//     return str;
// }

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i


// let rand = Math.random();
// console.log(rand);
// console.log(rand.toString(36));
// console.log(rand.toString(12));
// console.log(rand.toString(2));


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += characters.charAt(Math.floor(Math.random() * length));
    }
    return str;
}

console.log(generateKey(16, characters));