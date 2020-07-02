import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// The first of web development web:
// Keep the browser's developer console open at all times
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>button press history:{props.allClicks.join(' ')}</div>
  )

}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])


  const handleLeftClick = () => {
    setLeft(left + 1)
    setAllClicks(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAllClicks(allClicks.concat('R'))
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))