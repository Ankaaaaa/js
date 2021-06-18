const arr = [['apple', 3, 50], ['banana', 10, 70], ['pineapple', 1, 200], ['strawberry', 50, 30]];
const result = [];

function countBasketPrice(arr1, arr2) {
    for (let i = 0; i <= arr1.length - 1; i++) {
        const total = [arr1[i][0], arr1[i][1] * arr1[i][2]];
        alert('стоимость ' + arr1[i][1] + ' штук ' + total);
        arr2.push(total);
    }

    return arr2;
}
countBasketPrice(arr, result);
alert(result);


