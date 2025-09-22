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

    </>
  )
}

export default App
