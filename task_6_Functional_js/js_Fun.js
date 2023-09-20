const studentsGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];
const studentsGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87

    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 540
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    },
];
const maximum = findMax(4, 7, 10, 11, 15, 4, 5, 8, 18);
function findMax() {
    const values = arguments;// значение принимающее все аргументы в функции
    let maxValue = -Infinity;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
}
console.log(maximum);
const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);// достаем цену из обьекта 
console.log(group1PracticeTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime);

const arrTime = findMax(...group1PracticeTime, ...group2PracticeTime) // ((...) помогает вытащить элементы из массива и передат в функцию, 
//так же можно передать несколько массивов .
console.log(arrTime);


const maximum1 = findMax(4, 7, 10);
function findMax(...values) {
    return values.reduce((acc, value) => {
        if (value > acc) return value;
        return acc;
    }, -Infinity);
};
// Создадим массивы только со значениями времени отработанными
//студентами.
const group1PracticeTime1 = studentsGroup1PracticeTime.map((student) =>
    student.practiceTime);
console.log(group1PracticeTime1);

const group2PracticeTime1 = studentsGroup2PracticeTime.map((student) =>
    student.practiceTime);
console.log(group2PracticeTime1);
// Вызовем нашу функцию поиска максимума, используя оператор
//spread.
const maxTimeFromGroup1 = findMax(...group1PracticeTime1);
console.log(maxTimeFromGroup1); // 160
const maxTimeFromGroup2 = findMax(...group2PracticeTime1);
console.log(maxTimeFromGroup2); // 140
// Давайте также найдем максимально отработанное время среди двух
//групп.
const bothGroupsTime = [...group1PracticeTime1, ...group2PracticeTime1];
console.log(bothGroupsTime);
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160



const student = {
    firstName: "Ivan",
    age: 21,
};
/*   Функция вычисления года рождения. Принимает текущий год, и
  вычисляет год рождения студента используя глобальные данные. Это
  функция с побочными эффектами. Она сильно зависит от глобальной
  переменной student. */
const getYearOfBith = (currentYear) => {
    return currentYear - student.age;
}
console.log(getYearOfBith(2021)); // 2000
student.age = 25;
console.log(getYearOfBith(2021)); /* 1996 - Мы вызывали функцию
    дважды с одним и тем же параметром, но получили разный результат.
    Это значит что мы не можем точно знать что вернет функция в тот или иной момент работы программы,
     и мы не можем гарантировать что
    код будет выполняться верно. */
const getYearOfBithPureVersion = (age, currentYear) => {
    return age - currentYear;
}
// Более сложный пример с мутацией (побочными эффектами), но
//более частый на практике.
// Функция добавления нового ключа в объект. Принимает исходный
//объект, имя ключа, и значение, которое надо добавить.
const addField = (object, key, value) => {
    object[key] = value;
    return object;
};
const updatedStudent = addField(student, 'lastName', 'Belkin');
console.log(student); // {firstName: "Ivan", age: 25, lastName:
/*"Belkin"}  - вызвав нашу функцию добавления поля, мы изменили
начальный объект, что может привести к нежелательным последствиям
в остальном коде, которые порой очень сложно обнаружить. Например
дальше по коду может идти итерация объекта student и вывод только
начальных полей, но мы добавили в него третье поле, которое тоже
будет проитерировано. */
console.log(updatedStudent); // {firstName: "Ivan", age: 25,
//lastName: "Belkin"}
// Чистый вариант функции - нам нужно создать новый объект внутри
//функции для изменения и возврата.
const addFieldPureVersion = (object, key, value) => {
    return { // возвращаем новый объект.
        ...object, // Воспользуемся оператором spread, для получения
        //копии свойств исходного объекта.
        [key]: value // Добавим новое свойство.
    }
};
const updatedStudentPure = addFieldPureVersion(student,
    'practiceTime', 148);
console.log(student); // {firstName: "Ivan", age: 25, lastName:
//"Belkin"} - на этот раз исходный объект не был изменен.
console.log(updatedStudentPure); // {firstName: "Ivan", age: 25,
//lastName: "Belkin", practiceTime: 148}


/* ЗАМЫКАНИЕ */
const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter
    }
}
// Создаем счетчик.
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());

//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3


const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}
const chachedPow = closureFunction();
console.log(chachedPow(2));
// 4
chachedPow(8); // 64
chachedPow(2); // 4 — тут функция возьмёт значение из кеша и не будет
/* вычислять его заново. Это особенно эффективно работает, когда мы имеем
дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то
ресурсов из базы данных или внешних источников. Тут нельзя забывать о
валидации кеша. Он может стать неактуальным, если мы имеем дело с базой
данных или внешними источниками данных. */



const lastName = "Petrov";
// lexical environment: { lastName: "Petrov" }
const getFullName = (firstName) => {
    // lexical environment: { lastName: "Petrov", firstName:
    {/* <определяется в момент вызова функции> */} 
        const fullName = firstName + ' ' + lastName;
            console.log(fullName);
            return energy;}
            getFullName("Ivan");