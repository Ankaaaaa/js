"use strick";
const arr = [['apple', 3, 50], ['banana', 10, 70], ['pineapple', 1, 200], ['strawberry', 50, 30]];

function countBasketPrice(arr1) {
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
        total += arr1[i][1] * arr1[i][2];
    }
    return total;
}
alert(countBasketPrice(arr));














