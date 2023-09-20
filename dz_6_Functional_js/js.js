/* Задание 1
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода. */
const arr = [1, 5, 7, 9]
 console.log(Math.min(...arr));


 /* Задание: Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую. */

const createCounter = ()=> {
    let count = 0
    const increment = () => {
        return ++count;

    };
    const decrement = () => {
        return --count;

    };
    return {increment,decrement

    }
        

     
    
    
}

const countener = createCounter()
console.log(countener.increment());
console.log(countener.increment());
console.log(countener.increment());
console.log(countener.increment());
console.log(countener.decrement());


/* Задание 3
 Дополнительное задание, выполняем только если проходили работу с DOM.
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве. */
