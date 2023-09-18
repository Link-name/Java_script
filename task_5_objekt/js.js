const dayOFweek = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",
};
console.log(dayOFweek);


const user = {
    name: 'vladivir',
    surname: 'Yakimov',
    age: 33

}
console.log(`${user.name}${user.surname}${user.age}`);


const username = 'vladimir';
const surname = 'Yakimkov';
const age = 33;

function User() {
    this.name = username;
    this.surname = surname;
    this.age = age;
}
const userCard = new User(username, surname, age);
console.log(userCard);


const myTest = {
    name: 'vladivir',
    surname: 'Yakimov',
    age: 33
}

/* const aaa = myTest.name
const { name, surname, age } = myTest/* диструкторизация упрощенно заводим
 переменные со значением, так же если удалить элемент с обьекта после ольявления 
 переменных переменная не очистится. */
delete myTest.name
console.log(name);
console.log(aaa);
console.log(myTest);

myTest.youName = 'дополнительный обьект'
console.log(myTest);


/* Задание 2 (тайминг 25 минут)
1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7]; */

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
/* const obj = []; */

/* for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i]
}
console.log(obj); */


const obj3 = arr1.reduce((acc, el, i) => {
    acc[el] = arr2[i];
    return acc;
}, []);
console.log(obj3);


/* const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат. */

const obj1 = { x: 1, y: 2, z: 3 };

/* for (let i = 0; i < obj1.length; i++) {
    obj1.key[i]*2
} */
console.log(Object.keys(obj1));
/* вводим в степинь 2 элементы обьекта, сначала обращаемся к ключу (делаем массив ключей) с помощью forEach берем элемент и к элементу обьекта
присваеваем значение операции с элементом обьекта. */
Object.keys(obj1).forEach((el) => {
    console.log(obj1[el]);
    obj1[el] = obj1[el] ** 2
    console.log(obj1[el]);

})

console.log(obj1);

/* Задание 3 (тайминг 15 минут) */
const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
/* Найдите сумму элементов приведенного объекта. */

let sem = 0;
for (let key in obj) {
    for (let innerKey in obj[key]) {
        sum += obj[key][innerKey]

    }
}