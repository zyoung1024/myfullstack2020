import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => <div><h1>{props.text}</h1></div>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const Content = ({ text, val }) => {
  return (
    <tbody>
      <tr>
        <td>
          {text} &nbsp; {val}
        </td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let postitive = (good + neutral + bad === 0) ? '0.0%' : good / (good + neutral + bad) * 100.0 + '%'
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    )
  }

  return (
    <table>
      <Content text='good' val={good} />
      <Content text='neutral' val={neutral} />
      <Content text='bad' val={bad} />
      <Content text='all' val={good + neutral + bad} />
      <Content text='average' val={(good - bad) / 3} />
      <Content text='postitive' val={postitive} />
    </table>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => () => setGood(good + 1)
  const handleNeutralClick = () => () => setNeutral(neutral + 1)
  const handleBadClick = () => () => setBad(bad + 1)


  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={handleGoodClick()} text='good' />
      <Button onClick={handleNeutralClick()} text='neutral' />
      <Button onClick={handleBadClick()} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))