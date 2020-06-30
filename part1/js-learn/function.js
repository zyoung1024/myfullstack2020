
const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2)
    return p1 + p2;
}

const result = sum(1, 4)
console.log(result)

// 如果只有一个参数,可以在定义中去掉括号
// const square = p => {
//     console.log(p);
//     return p * p
// }

// 函数只包含一个表达式,不需要写大括号
const square = p => p * p;
// 操作数组特别方便,比如使用map方法
const t = [1, 2, 3];
const tSquared = t.map(val => val * val);
console.log(tSquared);
