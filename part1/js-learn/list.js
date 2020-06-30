const t = [1, 2, 3, 4, 5];

const m1 = t.map(value => value * 2);
console.log(m1);
// 解构赋值
const [first, second, ...rest] = t;

console.log(first, second);
console.log(rest);
