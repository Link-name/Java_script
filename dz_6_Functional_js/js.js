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

const createCounter = () => {
    let count = 0
    const increment = () => {
        return ++count;

    };
    const decrement = () => {
        return --count;

    };
    return {
        increment, decrement

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

/* необработанными. Также рекурсию можно применять при математических
вычислениях, когда сложное вычисление поддаётся разбиению типа:
сложное вычисление = простая операция, применённая к более простому
вычислению.
Например, вычисление степени: 210 = 29 × 2. */
const exponentiation = (base, exponent) => {
    // Всегда проверяйте данные, которые к вам пришли.
    if (typeof base !== 'number' || typeof exponent !== 'number')
        return NaN;
    // Если наша степень больше нуля, вызываем рекурсию, то есть
    /* берём основание и умножаем на нашу же функцию, только с
    аргументом степени, уменьшенным на единицу. */
    if (exponent > 0) return base * exponentiation(base, exponent
        - 1);
    // В противном случае делаем выход из рекурсии, просто
    /* возвращая основания, так как любое число в нулевой степени равно
    одному. */
    return 1;
}
const result = exponentiation(4, 4); // 
console.log(result);







const fieldTypes = {
    text: 'textField',
    fieldSet: 'fieldSet',
};
// Тестовый объект полей формы, который может быть получен от
/* сервера(Backend). */
const formData = [
    {
        fieldName: "First name",
        required: true,
        type: fieldTypes.text,
    },
    {
        fieldName: "Last name",
        required: false,
        type: fieldTypes.text,
    },
    {
        fieldName: "Address",
        required: true,
        type: fieldTypes.fieldSet,
        fields: [
            {
                fieldName: "State - Province",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "Street",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "House",
                required: true,
                type: fieldTypes.text,
            },
        ]
    },
];
// Наша функция, которая должна на основе этих данных построить
/* HTML - форму. */
const getForm = (formStructure) => {
    // Всегда проверяйте данные, которые к вам пришли.
    if (!Array.isArray(formStructure)) return 'Wrong form structure';
    let form = ''; // Это очень грубый пример. Мы будем создавать
   /*  форму просто как текст, а в реальности в этой переменной должны
    быть узлы DOM или компоненты фреймворка(например, React.js). */
        formStructure.forEach((element, index) => {
            // Если поле текстовое, то мы обработаем его сразу.
            if (element.type === fieldTypes.text) {
                form = form +
                    `<div class="field-wrapper">
    <label>${element.fieldName}</label>${element.required ?
    '<span class="required">*</span>' : ""
            }
            <input type="text">
            </div>`;
    }
   /*  // Если это набор полей, то мы вызовем нашу функцию
    рекурсивно для вложенного набора полей. */
    if (element.type === fieldTypes.fieldSet) {
    form = form + `< div
            class="fieldset" > ${ getForm(element.fields) }</div > `;
    }
    });
    return form;
    }
    const result1 = getForm(formData);
    console.log(result1)