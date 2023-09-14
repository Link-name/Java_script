/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]

Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3

*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx */
/* 1 Задание */
const arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === 0) { console.log(`${arrNumber[i]} - это число 0`); }
    else if (arrNumber[i] % 2 === 0) { console.log(`${arrNumber[i]} - это четное число`); }
    else if (arrNumber[i] !== 0) { console.log(`${arrNumber[i]} - это не четное число`); }


}

/* 2 Задание */
/* Если нам не нужно чтоб создавался новый массив */
const arrNumber2 = [1, 2, 3, 4, 5, 6, 7, 6, 4, 5]
for (let i = 0; i < arrNumber2.length; i++) {
    if ((arrNumber2[i] === 4) || (arrNumber2[i] === 5)) {
        arrNumber2.splice(i, 1)
        i--
    }
}
console.log(arrNumber2);


/* 3 задание  */
const arrNumver3 = Array.from({ length: 5 }, (_, i) => Math.floor(Math.random() * 9))/* создали массив длиной 5 со случайными числами от 0 до 9 */
console.log(arrNumver3);
const arrSum = arrNumver3.reduce((a, b) => (a + b), 0)
const arrMin = Math.min.apply(null, arrNumver3);/* старый способ нахождение минимального числа в массиве   */
const arrMin2 = Math.min(...arrNumver3);/* c использованием оператора расширения */
const testNember = 3;
/* вызываю функцию обратного вызова, беру элемент и сравниваю с числом, дальше использую тернарный оператор для проверки условия,
 а так же indexof для вывода индекса под которым находится элемент в массиве*/
const foundElement = arrNumver3.find(el => el === testNember)
    ? `введенное число  ${testNember} найдено - под индексом ${arrNumver3.indexOf(testNember)}` : `ведденного числа нет  есть в массиве`
console.log(arrSum);
console.log(arrMin);
console.log(arrMin2);
console.log(foundElement);

/* Задание (*) */
/* c помощью ripeat повторяет симфол х столько раз сколько дает i */
const x = 'x'
const newArray = Array.from({ length: 20 });
for (let i = 0; i < newArray.length; i++) {
    let a = x.repeat(i)
    /* console.log(`${a}`); */
    console.log(a);
}
/* второй простой вариант*/
let c =''
for (let i = 0; i < newArray.length; i++) {
    c += x
    console.log(c);
}












