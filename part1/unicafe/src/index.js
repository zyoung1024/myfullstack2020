import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Handling arrays
const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    // 向数组中添加新元素通过concat实现
    // 该方法不改变现有数组,而是返回新数组的副本
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    // setAll(allClicks.push('R')) ERROR! React 组件的状态不能直接修改
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join('')}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))