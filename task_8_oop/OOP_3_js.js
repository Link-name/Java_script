
function BankAccount(accountNumber, balance) {

    this.accountNumber = accountNumber;
    this.balance = balance

}
BankAccount.bankName = "GBank"


BankAccount.prototype.depocit = function (number) {
    if(!Number.isFinite(number) || number<=0){
        throw new Error(`Вы пытаетесь положить отрицательное число ${number}`);
    }
    this.balance +=number;
};


BankAccount.prototype.withdraw = function(number) {
    validateMoney(number)
    if (this.balance < number) throw new Error(`Недостаточно средств баланс = ${balance}`);
    this.balance = this.balance - number;
};

BankAccount.prototype.printBalance = function() {
    console.log(`${BankAccount.bankName} Баланс счета ${this.balance}`);
};

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
account1.withdraw(234.44);