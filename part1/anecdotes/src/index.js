import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}
const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Max = ({ props, points, maxIndex }) => {
  if(points === Array(points.length).fill(0)) {
    return (
      <div>
        <h2>Nothing</h2>
      </div>
    )
  }

  return (
    <div>
      {props.anecdotes[maxIndex]}
      <p> has {points[maxIndex]} votes.</p>
    </div>
  )
}



const App = (props) => {
  const len = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(len).fill(0))
  const [maxIndex, setMaxIndex] = useState(0)

  const random = () => () => setSelected(Math.floor(Math.random() * len))
  const arrayMax = (array) => {
    let max = -Infinity
    let res = 0
    for (let i = 0; i < len; i++) {
      if (points[i] > max) {
        res = i
        max = points[i]
      }
    }
    return res
  }
  const vote = (num) => {
    const copy = { ...points }
    copy[num]++
    setPoints(copy)
    setMaxIndex(arrayMax(points))
  }


  return (
    <div>
      <Header title='Anecdote of the day' />
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes.</p>
      <Button text='vote' onClick={() => vote(selected)} />
      <Button text='next anecdotes' onClick={random()} />
      <Header title='Anecdote with most votes' />
      <Max props={props} maxIndex={maxIndex} points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))