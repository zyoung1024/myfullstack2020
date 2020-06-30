// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// i is still valid outside the for loop

(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})()
// console.log(i);

const t = [1, -1, 3]
t.push(5);
console.log(t.length)
console.log(t[1])

t.forEach(value => { console.log(value) })

const t1 = [1, -1, 3];
// 不会向就数组添加新的元素,直接返回一个新数组
const t2 = t1.concat(5);

console.log(t1);
console.log(t2);