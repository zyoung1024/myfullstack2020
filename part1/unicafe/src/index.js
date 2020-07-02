import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       <div>
//         {left}
//         <button onClick={() => setLeft(left + 1)}>left</button>
//         <button onClick={() => setRight(right + 1)}>right</button>
//         {right}
//       </div>
//     </div>
//   )
// }

const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     right: clicks.right
  //   }
  //   setClicks(newClicks)
  // }
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  // 违反了React中状态不可直接修改的原则
  // const handleRightClick = () => {
  //   clicks.right++
  //   setClicks(clicks)
  // }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))