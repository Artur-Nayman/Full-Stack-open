import StatisticLine from './StatisticLine'

const Statistic = ({ good, mid, bad }) => {
  const all = good + mid + bad
  const average = all > 0 ? (good*1 + mid*0 + bad*(-1)) / all : 0
  const positive = all > 0 ? (good / all) * 100 : 0

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
        <tbody>
            <StatisticLine text="Good" value={good}/>
            <StatisticLine text="Mid" value={mid}/>
            <StatisticLine text="Bad" value={bad}/>
            <StatisticLine text="All" value={all}/>
            <StatisticLine text="Average" value={average.toFixed(2)}/>
            <StatisticLine text="Positive" value={positive.toFixed(1)}/>
        </tbody>
    </table>
  )
}

export default Statistic
