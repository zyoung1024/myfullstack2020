const arto = {
    name: 'Arto Hellas',
    age: 35,
    eduction: 'PhD',
    // 通过给一个对象定义函数属性,给对象分配方法
    greet: function () {
        console.log(`hello, my name is ${this.name}.`);
    },
    doAddition: function (a, b) {
        console.log(a + b);
    }
}

arto.doAddition(1, 4);
// 赋值给变量的方法引用
const referenceToAddition = arto.doAddition;
referenceToAddition(10, 15)

arto.greet();
const referenceToGreet = arto.greet;
referenceToGreet()  // hello, my name is undefined.

// 方法可以在对象创建后在赋值给对象
arto.growOlder = function () {
    this.age += 1;
}

console.log(arto.age);
arto.growOlder();
console.log(arto.age);


