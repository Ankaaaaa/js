// alert('Задание №1')
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 префиксная, значение операнда возвращается увеличенным на единицу. c=2 a=2
// d = b++; alert(d);           // 1 постфикс,значение операнда возвращается, а затем увеличивается на единицу. d=1 b=2
// c = (2+ ++a); alert(c);      // 5  ранее а=2, увеличиваем на 1 получаем 2+1+2=5
// d = (2+ b++); alert(d);      // 4  b увеличивается на 1 и становится равны b=3, но d=2+2 (см.строку 4)
// alert(a);                    // 3  а=3
// alert(b);                    // 3  b=3



// alert('Задание №2')
// var a = 2;
// var x = 1 + (a *= 2);      х=1+(2*2)=5



// alert('Задание №3')

// let a = prompt('введите первое число: ');
// let b = prompt('введите второе число: ');

// if (a >= 0 && b >= 0) {
//     alert(`разность двух чисел равна: ${a - b} `);
// } else if (a < 0 && b < 0) {
//     alert(`произведение двух чисел равна: ${a * b} `);
// } else {
//     alert(`сумма двух чисел равна: ${Number(a) + Number(b)} `);
// }


// alert('Задание №4');

// var d = prompt('введите целое число от 0 до 15: ');
// switch (Number(d)) {
//     case 0:
//         alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 1:
//         alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 2:
//         alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 3:
//         alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 4:
//         alert('4 5 6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 5:
//         alert('5 6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 6:
//         alert('6 7 8 9 10 11 12 13 14 15');
//         break;
//     case 7:
//         alert('7 8 9 10 11 12 13 14 15');
//         break;
//     case 8:
//         alert('8 9 10 11 12 13 14 15');
//         break;
//     case 9:
//         alert('9 10 11 12 13 14 15');
//         break;
//     case 10:
//         alert('10 11 12 13 14 15');
//         break;
//     case 11:
//         alert('11 12 13 14 15');
//         break;
//     case 12:
//         alert('12 13 14 15');
//         break;
//     case 13:
//         alert('13 14 15');
//         break;
//     case 14:
//         alert('14 15');
//         break;
//     case 15:
//         alert('15');
//         break;
//     default:
//         alert("Вы ввели не верное значение!");
// }


// alert('Задание №5');

function calculator(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return (Number(arg1) + Number(arg2));
        case '-':
            return (Number(arg1) - Number(arg2));
        case '*':
            return (Number(arg1) * Number(arg2));
        case '/':
            return (Number(arg1) / Number(arg2));
        default:
            console.log('Вы ввели неизвестную операцию');
    }
}

// alert(calculator(5, 3, '/'));

// alert('Задание №6');

let arg1 = prompt('введите первое число');
let arg2 = prompt('введите второе число');
let operation = prompt('введите операцию над числами (+ ,  - ,  * ,  / )');

function mathOperation(arg1, arg2, operation) {
    result = calculator(arg1, arg2, operation);
    return (result);
}
alert(`${arg1} ${operation} ${arg2} = ${mathOperation(arg1, arg2, operation)} `);
