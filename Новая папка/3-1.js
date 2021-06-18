
var n = 100;
var total = n;
let result = [];
var count = 0;

while (n > 0) {
    if (check(n)) {
        result.push(n)
        count++;
        n--;
    }
    n--;
}

alert('список простых чисел входящих в промежуток от 0 до ' + total + ' получается ' + result + ' их количество ' + count);

function check(number) {
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

