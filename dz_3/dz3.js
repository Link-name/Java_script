/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

/* 1 Задание */
function cube(number) {
    return num = number * number * number;
}
console.log(cube(2) + cube(3));

/*2 Задание  */

function salaryСalculation(num) {
    if (!isNaN(num)) {
        return console.log(salary = num * 0.87);

    }
    else {
        return console.log(`Ввели не правильно значение - ${num}`);
    }
}
let sulary = prompt('введите зарплату');
salaryСalculation(sulary);

/*3 Задание  */

let numb1 = prompt('Введите первое число');
let numb2 = prompt('Введите второе число');
let numb3 = prompt('Введите третье число');
function maxNumber(a, b, c) {
    return num = Math.max(a, b, c);
}
console.log(`масимальное число ${maxNumber(numb1, numb2, numb3)}`);

/*4 задание  */

const sum = (a, b) => a + b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const differenceNumber = (a, b) => (a > b) ? а - b : b - a;

console.log(sum(3, 4));
console.log(multiplication(3, 4));
console.log(division(3, 4));
console.log(differenceNumber(3, 4));
