/* Задание 1: "Управление библиотекой книг"

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
 */
// Пример использования класса
/* const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123" */

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`название книги : ${this.title} , автор: ${this.author}, количество страниц: ${this.pages}`);
    }

}
const book = new Book("BookName1", "Author1", 123);
console.log(book);
book.displayInfo();



/* Задание 2: "Управление списком студентов"
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте в консоль. */

// Пример использования класса
/* const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); "Name: John Smith, Age: 16, Grade: 10th grade" */

class Student {
    constructor(name,age,grade){
        this.name=name;
        if (!isNaN(parseInt(age))) { // проверяю что введенно и можно ли его преоброзовать 
            //(возвращает true-если число или есть возможно преоброзования )
            this.age = parseInt(age);
        } else {
            console.log("Ошибка: Возраст должен быть числом. Установлен возраст по умолчанию: 0.");
            this.age = 0;
        }
        this.grade = grade;

    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student = new Student("John Smith", " edfdg", "10th grade");
student.displayInfo(); "Name: John Smith, Age: 16, Grade: 10th grade"