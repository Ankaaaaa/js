function NumberCheck(n) {
    if (!Number.isInteger(n) || n < 0 || n > 999) {
        return ("число либо меньше нуля либо больше 999 - ваше число: " + n)
    }
    else {
        hundreds = Math.trunc(Number(n) / 100);
        dozens = Math.trunc(Number(n) / 10) % 10;
        units = Number(n) % 10;
        return ('единицы: ' + units + ' десятки: ' + dozens + ' сотни: ' + hundreds);
    }
}
;


alert(NumberCheck(563));
alert(NumberCheck(-563));
alert(NumberCheck(5963));
alert(NumberCheck(63));




