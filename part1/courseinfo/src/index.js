import React from 'react'
import ReactDom from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// first version
// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part1} {props.exercise1}
//       </p>
//       <p>
//         {props.part2} {props.exercise2}
//       </p>
//       <p>
//         {props.part3} {props.exercise3}
//       </p>
//     </div>
//   )
// }

// second version
const Part = (props) =>
  <div>
    <p>{props.part} {props.exercise}</p>
  </div>

const Content = (props) => {
  return (
    <div>
      <Part exercise={props.exercise1} part={props.part1} />
      <Part exercise={props.exercise2} part={props.part2} />
      <Part exercise={props.exercise3} part={props.part3} />
    </div>
  )
}


const Total = (props) =>
  <div>
    <p>Number of exercises {props.num}</p>
  </div>

const App = () => {
  // const definition
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of component'
  const exercise3 = 14;

  return (
    <div>
      {/* 分为三个组件 */}
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
      <Total num={exercise1 + exercise2 + exercise3} />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))