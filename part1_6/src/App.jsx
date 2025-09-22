import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Statistic from './assets/Statistic'

function App() {
  const [good, setGood] = useState(0)
  const [mid, setMid] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <h1>Give Feedback</h1>
      <div className="card">
        <button onClick={() => setGood((good) => good + 1)}>
          Good
        </button>
        <button onClick={() => setMid((mid) => mid + 1)}>
          Mid
        </button>
        <button onClick={() => setBad((bad) => bad + 1)}>
          Bad
        </button>
        <p>
          Statistic
        </p>
      </div>
      <p className="read-the-docs">
        Good: {good}
      </p>
      <p className="read-the-docs">
        Mid: {mid}
      </p>
      <p className="read-the-docs">
        Bad: {bad}
      </p>
      <Statistic good={good} mid={mid} bad={bad} />
    </>
  )
}

export default App
