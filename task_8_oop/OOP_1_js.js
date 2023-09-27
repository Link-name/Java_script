// Объект робот-пылесос.
const VacuumCleaner = {
    Model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод
        /*     мы вызвали. */
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод
        /*     мы вызвали. */
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');

    }
};

const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод
        /* мы вызвали. */
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
            'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};

const Samba = {
    // Обновляем свойства под конкретную модель.
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
    };


 

function getPrototypeChain(obj) {
    let arr = [];
    let obj_proto = obj;
    while (Object.getPrototypeOf(obj_proto) !== null) {
        arr.push(obj_proto);
        obj_proto = Object.getPrototypeOf(obj_proto)
    }
    return arr;
}



console.log(getPrototypeChain(Samba));