import React from 'react'
import ReactDom from 'react-dom';

// const App = () => {
//   console.log('hello from component');
//   return (
//     <div>
//       <p>hello world</p>
//     </div>
//   )
// }

// 定义新组件
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />  {/* 引用Hello组件*/ }
//     </div>
//   )
// }

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>
//         Hello world, it is {now.toString()}
//       </p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// props: passing data to components

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" />
//       <Hello name="Daisy" />
//     </div>
//   )
// } 

// React 组件名称必须大写
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// 如果箭头函数主体只有单个表达式,可省略大括号和return
const Footer = () =>
  <div>
    <a href="https://github.com/mluukkai">mluukkai</a>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
  </div>

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={10 + 24} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </div>
//   )
// }

const App = () => {
  // 用一个空元素包装组件的返回内容
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={16 + 10} />
      <Footer />
    </>
  )
}
// 将内容渲染到div元素中
ReactDom.render(<App />, document.getElementById('root'))