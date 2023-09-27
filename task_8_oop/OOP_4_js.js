class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} издает звук`);
    }
}
 class Doc extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    fetch(){
        console.log(`Собака ${this.name} принесла мяч`)
    }
 }
 const animal1 = new Animal("животное");
 animal1.speak();
 const dog1 = new Doc("Бобик","Дворняшка");
 dog1.speak();
 console.log(dog1.breed);
 dog1.fetch();