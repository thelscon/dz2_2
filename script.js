'use strict';

alert ('Запросить у пользователя последовательно несколько числовых значений и вывести в консоль их среднее арифметическое');

let valueOne = Number (prompt ('Введите первое числовое значение: '));
let valueTwo = Number (prompt ('Введите второе числовое значение: '));
let valueTree = Number (prompt ('Введите третье числовое значение: '));
let valueFour = Number (prompt ('Введите последнее числовое значение: '));
let valueAverage = (valueOne + valueTwo + valueTree + valueFour) / 4;
alert ('Среднее арифметическое введенных значений - ' + valueAverage);
