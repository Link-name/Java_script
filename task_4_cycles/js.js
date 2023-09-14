const myArrat = [1,2,3]
for (let i = 0; i < myArrat.length; i++) {
    console.log(myArrat[i]);

}


/* for of */
for (const i of myArrat) {
    console.log(i);
}

myArrat.forEach((el,i,arr)=> {
    console.log(el,i,arr);
});


const obj = {
    people:47
}

const arr1 = Array.from({length: obj.people}, (_,i) =>i) /* (_,i)=> `${a} ${i}`
 можно присваивать любою информацию*/
arr1 [10] = {name: 'vladimer'}
console.log(arr1);

/* фильтр  */
const arr = [2,5,9,16,5,3];
const newArr = arr.filter((el) => el>3 && el <10)/* можно дописать .forEach(el => console.log(el))
вывод по элементно в консоль (без создования переменной)*/
console.log(newArr);/* вывод нового массива */

const arr2 = [1,2,3,4,5]
const rec = arr2.reduce((f,el) => f * el)
console.log(rec);

const sum = Array.from({length: 50}, (_,i) => 2+i*2)
.reduce((acc,el) => acc + el,0)
console.log(sum);

/* map  создат новый массив */
const arr4= Array(50).fill(0)
const sum1 = arr.map((_,i) => 2+i *2).reduce((acc, el) => acc + el, 0)

const arr5 = [1,2,3,4,5,6,7,8];
const res1 = arr.filter((el) => el % 2 ===0).forEach((el) => console.log(el*el))
const res2 = arr.filter((el) => el % 3 ===0).forEach((el) => console.log(el*el))