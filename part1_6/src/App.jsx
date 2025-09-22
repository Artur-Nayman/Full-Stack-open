import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Statistic from './assets/Statistic'
import Button from './assets/Button'

function App() {
  const [good, setGood] = useState(0)
  const [mid, setMid] = useState(0)
  const [bad, setBad] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
      ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <>
      <h1>Give Feedback</h1>
      <div className="card">
        <Button text="Good" handleClick={() => setGood(good + 1)}/>
        <Button text="Mid" handleClick={() => setMid(mid + 1)}/>
        <Button text="Bad" handleClick={() => setBad(bad + 1)}/>
        <p>
          Statistic
        </p>
        <Statistic good={good} mid={mid} bad={bad} />
      </div>
       <div>
           <p>{anecdotes[selected]}</p>
           <p>has {votes[selected]} votes</p>
           <button onClick={handleVote}>Vote</button>
           <button onClick={getRandomAnecdote}>Next anecdote</button>
       </div>
    </>
  )
}

export default App
