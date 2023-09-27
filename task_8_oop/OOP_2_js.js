function Person(name,age){
    this.name=name;
    this.age=age;
   
}

Person.prototype.introduce = function(){
    console.log(`Меня зовут ${this.name} и мне ${this.age}`);
};
const person1 = new Person("jaon", 25)
person1.introduce();