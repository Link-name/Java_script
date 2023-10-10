
// другой модуль (например, main.js)
import addddd,{subtract as newName ,subtract1 as newNameTo } from './jsModuls.mjs';
import newSummthree from './jsModuls3.mjs'
const result1 = addddd(5, 3);       // Вызываем функцию add из math.js
const result2 = newName(11, 2); // Вызываем функцию subtract из math.js
const result3 = newNameTo(11, 2);
console.log(result1); // Вывод: 8
console.log(result2); // Вывод: 8
console.log(result3); // Вывод: 8
console.log(newSummthree(2,2,2));