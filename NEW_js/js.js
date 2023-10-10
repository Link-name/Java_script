'use strict'
/* Выражения любое выражене возращает значение */

/*  const myName = 'Maks'

 myName = ''
 console.log(myName);
 */
const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA;

copyOfA.a = 20;
console.log(objectA);
copyOfA.c = 'abc'
console.log(objectA);

/* При своение фунцкии (названию ) значения таким образом уже неработает
функция по этому лучше делать это через const и обьевление 
переменной в которую присваевается функция
 */
function a() {
    console.log("hi");

}

a();
a = 10;
a;
a();
a;

/* Разбор обьекта  */
const myCity = {
    city: 'Myrmansk',
    address: 'Baymana',
    dom: 43
}
console.log(myCity);
console.log(myCity.dom);
myCity.city = 'Mockow'
console.log(myCity);

delete myCity.address
console.log(myCity);
const countMyname = 'fuuuti'
myCity[countMyname];
myCity[countMyname] = 'miiiisi';
console.log(myCity);

const myObj = {
    name: 'maks',
    fest: 32,
    printTextObj: function () {
        console.log('Hi name');
    }

}
myObj.printTextObj();

/* Работа с обьектом в функции и создания копии обьекта и добавление 
в новую меременную, но помним что этот способ не создаст 
нам вложенные обьекты , они так же останутся ссылкой */
const personOne = {
    name: "Mask",
    age: 32
}

function incresePersonAge(percon) {
    const uodatedPerson = Object.assign({}, percon);
    uodatedPerson.age += 1
    return uodatedPerson
}

const newPersonOne = incresePersonAge(personOne);
console.log(newPersonOne);
console.log(personOne);

/* Колбек функции  */
function printMy() {
    console.log('Boor');
}

console.log('start');
setTimeout(printMy, 2000);
console.log('finish');


const number = 10;
function myFN() {
    function toMyFn() {
        return console.log(number);
    }
    toMyFn();
}
myFN();


function myFn() {
    let b;
    a = true;
    b = 10;
    console.log(a);
    console.log(b);
}
myFn();
console.log(a);

const v = 10;
v && console.log('hi')

const s = 10;
let d
console.log(!s);
s && d
console.log(!s && d);
/* Вариант сокращение стрелочной функции */
(a, b) => {
    return a + b
}
/* или  */
(a, b) => a + b /* стрелочная функция вернет значение 
автоматически */
function multByFactor(value, multiplier = 5) {
    return value * multiplier
}
/* let numbers =  multByFactor(10,2) */

function multByFactor(value, multiplier) {
    if (multiplier === undefined) multiplier = 3
    return value * multiplier
}

let numbers = multByFactor(10, 1)
console.log(numbers);
const nut = function (value, multiplier) {
    if (multiplier === undefined) multiplier = 3
    return value * multiplier
}

    (value, multiplier) => value * multiplier

/* не явный возврат функций */
const newPost = (post, addData = Date()) => ({
    ...post,
    addData
})

/* Явный возврат функций */
const newPost2 = (post, addData = Date()) => {
    return {
        ...post,
        addData
    }
}

const newObj = {
    id: 1,
    name: 'Maks'
}
const newObj2 = newPost2(newObj)

console.log(newObj);
console.log(newObj2);

const functionError = () => { throw new Error('Some error') }
try {
    functionError()
} catch (error) {
    console.error(error);
    console.log(error.message);
}


console.log('consle');

function myFn(a, fn) {

    console.log(fn(a));


}

function fni(a) {
    return a * 3;
}



const a = 10;
let c = true;
let b;


myFn(10, fni)

const obj = {
    1: 'new',
    2: 12
}
console.log(obj);
console.log(obj[1]);

/* Метод forEach просто перебирает элементы массива */
const myArray = [1, 2, 3, 4, 5]
myArray.forEach((el) => console.log(el * 2))
console.log(myArray);

/* Метод map - возвращает новый массив */
const myArray2 = [1, 2, 3, 4, 5]
let newMyArray1 = myArray.map(el => el * 2)
console.log(newMyArray1);

const myArray2 = [1, 2, 3, 4, 5]
const as = myArray2.map(el => el / 2)
const as2 = myArray2.map(function (el) {
    return console.log(el * 2);
})
console.log(as);
console.log(as2);

/* Деструктаризация */

const odjMy = {
    name: "Maks",
    age: 21,
    count: '1',
    ade: ''
}

console.log(Boolean(odjMy.ade));

/* const {name, nnn} = odjMy;
console.log(age);
console.log(name);

const arr = [1,2,3,4];
const [numb1,numb2] = arr;
console.log(numb1);
 */
const myFn = ({ age, count }) => {
    if (!count) {
        console.log(` Возраст есть ${age} но нет количества`);
    } else {
        console.log(`Возраст человека ${age}  количемтво людей ${count}`);
    }
}

myFn(odjMy)


const sumPositiveNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Агременты не евляются числом'
    }

    if (a <= 0 || b <= 0) {
        return 'аргументы меньше или равно 0'
    }

    return a + b

}

console.log(sumPositiveNumber(5, 5));

const num = 'Mas';

/* Switch  инструкции */
switch (num) {
    case 'tom':
        console.log(`привет Том`);
        break
    case 'toti':
        console.log(`Опять ты Toti`);
        break
    case 'dreu':
        console.log(`))))))`);
        break
    case 'Maks':
        console.log(`Хаюшки Максончик`);
        break
    default:
        console.log('Хрен пойми кто приперся');

}

/* Примеры работы тернарного оператора */

const value = undefined;
const ccc = value
    ? 1
    : 2
console.log(`object`);
console.log(ccc);

const i = 245;

let si = i >= 1 ? i + 4 : -i
console.log(si);

const sumPositiveNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Агременты не евляются числом'
    }

    if (a <= 0 || b <= 0) {
        return 'аргументы меньше или равно 0'
    }

    return a + b

}

const ttt = i > 0 ? sumPositiveNumber(i, 1000) : console.log(`не сработоло`);
console.log(ttt);
/*  Forech */

/* два варианта перебора массива  */
const arrs = [1, 32, 3, 4, 65, 6, 7];
for (let i = 0; i < arrs.length; i++) {
    console.log(arrs[i], i);

}
console.log(``)
arrs.forEach((element, index) => {
    console.log(element, index);
}, 2)

/*  */
let a = 2
while (a <= 2) {
    console.log(a);
    a++
}

console.log(`-----`);
do {
    console.log(a);
} while (a < 2)

/* Создание из обьекта массив Свойств или Значенией */
const objektTest = {
    nume: `Maks`,
    age: 12,
    count: 1,
    wigth: 1000,
    agres: 'Myrmans'
}

/* трансформируем обьект в массив  */
console.log(Object.keys(objektTest));
console.log(Object.values(objektTest));

/* Переборка массива через For in */
for (const key in object) {// не рекомендовано лучше использовать forEach
    console.log(object[key]);
}

const ds = [1, 2, 3, 4, 5, 6];

for (s of ds) {
    console.log(s);
}

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
    static margeComment(first, second) {// не наследуется в экземплярам
        // можно вызывать только через класс 
        return `${first}${second}`
    }
}

const newCommentObj = new Comment('uuuu My')
newCommentObj.upvote();
console.log(newCommentObj);
newCommentObj.upvote();
console.log(newCommentObj);

/* Проверка на пренадлежность если  */
console.log(newCommentObj.hasOwnProperty('text'));// собственное свойство
console.log(newCommentObj.hasOwnProperty('votesQty'));
console.log(newCommentObj.hasOwnProperty('upvote'));// не собственный метод 

class NewMyArr extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const toMyArr = new NewMyArr(2, 3, 4, 5, 6)
console.log(toMyArr);
console.log(toMyArr.sum());

console.log(Comment.prototype === newCommentObj.__proto__);



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.log(error.message))// console.arror(error)


const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))


const asyncFn = async () => {
    return 10 // вернет промес и результатом будет 10 
}
const asyncFn1 = async () => {
    throw new Error('qwewqeqwewq') // вернет ошибку
}

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))


const asyncFn3 = async () => {
    await <Promise> // вернет промис</Promise>
}

/* работа с асихрроной функцией */
const getData1 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = `https://jsonplaceholder.typicode.com/todos`
const data = await getData(url)

try {
    const data = await getData(url)
    console.log(data)
}catch(error){
    console.log(error.message);
}