const percon = {
    name: "Join",
    age: 25,
    gender: "male",
    introdece() {
        console.log(`имя: ${this.name} возраст: ${this.age} пол: ${this.gender}`);
    },
    changeName(newName) {
        this.name = newName;
    }
};


percon.introdece();

console.log(percon.introdece());
console.log(percon.changeName("kiki"));
console.log(percon.introdece());




const animal = {
    names: "liki",
    est() {
        console.log(` ${this.names} ест`);
    }

}
const doc = {
    names: "ART",
    darc() {
        console.log(`собака лает`);
    },
}
console.log(doc);
animal.est.call(doc);/* используем метод с другого обьекта */
console.log(doc);
doc.est = animal.est; /* дублируем метод в оьект  */
doc.est()
console.log(doc);



function add(s, d) {
    return this.a + this.b + s + d;
}

const obj = {
    a: 2,
    b: 2
}

console.log(add(obj.a, obj.b));

console.log(add.call(obj));
obj.a = 4;
const ccc = add.call(obj);
obj.a = 4;
console.log(ccc);
obj.a = 10;
console.log(ccc);
console.log(add.call(obj));
console.log(add.bind(obj));
const ccc1 = add.bind(obj);
obj.a = 100;

console.log(ccc1());
obj.a = 10000;
console.log(ccc1(1, 3));




class Percon {
    constructor(name, age) {
        this.name1 = name;
        this.age = age;

    }
    inntrodiuce() {
        console.log(` Меня зовут ${this.name1} ${this.age}`);
    }
}


const percon1 = new Percon("Joun", 25)
percon1.inntrodiuce();



class BankAccount {
    static bankName = "GBank"
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance
    }
    depocit(number) {
        if(!Number.isFinite(number) || number<=0){
            throw new Error(`Вы пытаетесь положить отрицательное число ${number}`);
        }
        this.balance +=number;
    };
    withdraw(number) {
        validateMoney(number)

        if (this.balance < number) throw new Error(`Недостаточно средств баланс = ${balance}`);
        this.balance = this.balance - number;
    };
    printBalance() {
        console.log(`${BankAccount.bankName} Баланс счета ${this.balance}`);
    };
    
}

function validateMoney(amount) {
    if (!Number.isFinite(amount) || amount <=0){
        throw new Error ('Ввели не корекную сумму денег')
    }
    if ((amount % 1).toString().length>4){
        throw new Error('Wrong money format');
    }
    
}


const account1 = new BankAccount("123213412412", 10000)
/* console.log(account1);
account1.depocit(-500.32432432); */
account1.printBalance();
account1.withdraw(234.44422222);