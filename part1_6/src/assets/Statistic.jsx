const Statistic = ({ good, mid, bad }) => {
  const all = good + mid + bad
  const average = all > 0 ? (good*1 + mid*0 + bad*(-1)) / all : 0
  const positive = all > 0 ? (good / all) * 100 : 0

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <p>All: {all}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positive.toFixed(1)}%</p>
    </>
  )
}

export default Statistic
