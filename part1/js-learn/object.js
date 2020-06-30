/*
    js中 定义对象的方式
    对象的值可以是任意类型: 整数 字符串 数组 对象
    下面展示对象字面量的方式,在大括号中列出它的属性
*/
const object1 = {
    name: 'Arto hellas',
    age: 35,
    eduction: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name);
const fieldName = 'age';
console.log(object1[fieldName]);
let name3 = 'name';
console.log(object3[name3]);
// 可以使用句点符号或括号动态往对象中添加属性
object1.address = 'Helsinki'
object1['secret number'] = 12341
console.log(object1);

// 必须通过中括号完成,在使用句点符号时,带空格的 secret number 不是一个合法的属性名


