/* . Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию) */
function greet(firstName, lastName, age) {
    return (` Привет ${firstName} ${lastName} с возрастом ${age}`);
}


console.log(greet('Ваня', 'Петров', 22));

console.log('привет');


function x() {
    const a = 5;
    function y() {
        return a + 10
    }
    return y;
}
const res = x();
console.log(x()());/* если чтоб использовалась внутренняя функция нужно добавать скобочки */
console.log(res())

function getCount() { /* в примере идет увеличение count  если м ы привязываем 
функцию к переменной и потом вызываем эту переменную  друг за другам 
тогда каунт будет увеличиваться.*/
    let count = 0;
    return function () {
        count++
        console.log(count);
    }
}
const iner = getCount()

iner()
iner()
getCount();

/* не совсем понял почему получилось у вас 9 и 10 ? */
function getCount1() {
    let count1 = 0;
    return function () {
        count1++;

        return function (x) {
            count1 += x;
            console.log(count1);
        }
    }
}
const incr1 = getCount1();
const addValue = incr1();
addValue(5)
addValue(2)
console.log(incr1);
console.log(addValue);

/* Рекурссия  (недо рекурссия)*/
function sumTheeNumber(num1, num2, num3, num4) {
    if (num4 === undefined) {
        return num1 + num2;
    } else {
        return sumTheeNumber(num1 + num2, num3, num4)

    }
}
console.log(sumTheeNumber(2, 4, 5, 5));

function sqareRoot(num) {
    return Math.sqrt(num)

}
const a = sqareRoot(4)
const b = sqareRoot(4)
const c = a + b;
console.log(c);

/* поиск мин стрелками, если {} пишим return */
const fivdMin = (a,b) => Math.min(a,b);
console.log(fivdMin(1,5));



function createGreetFunction(){
    const now = new Date();
    const hours = now.getHours();
    return function(name){
        if (hours >= 6 && hours < 12) {
            return `Доброе утро ${name}`
        }
        else if (hours >= 12 && hours < 18) {
            return `Доброй день ${name}`
        }
        else if (hours >= 18 && hours < 22) {
            return `Доброе утро ${name}`
        }
        else if (hours >= 22 && hours < 6) {
            return `Доброе утро ${name}`
        }
    }
}
const greet = createGreetFunction();
console.log(greet   ('max'));