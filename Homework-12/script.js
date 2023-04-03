let arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, element) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            continue;
        }else {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = newArr[i];
    }
    arr.length--;
}

removeElement(arr, 5);

console.log(arr);