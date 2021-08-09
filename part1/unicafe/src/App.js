import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value ? value : '-'}</td>
    </tr>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({stats}) => {
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={stats.good.text} value={stats.good.value} />
          <StatisticLine text={stats.neutral.text} value={stats.neutral.value} />
          <StatisticLine text={stats.bad.text} value={stats.bad.value} />
          <StatisticLine text={stats.all.text} value={stats.all.value} />
          <StatisticLine text={stats.average.text} value={stats.average.value} />
          <StatisticLine text={stats.positive.text} value={`${stats.positive.value} %`} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addValue = (value, setter) => {
    setter(value + 1)
  }

  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = all !== 0 ? good / all * 100  : 0
  const statistics = {
    good:     { text: 'good',value: good },
    neutral:  { text: 'neutral', value: neutral },
    bad:      { text: 'bad', value: bad },
    all:      { text: 'all', value: all },
    average:  { text: 'average', value: average },
    positive: { text: 'positive', value: positive }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => addValue(good, setGood)} text='good' />
      <Button handleClick={() => addValue(neutral, setNeutral)} text='neutral' />
      <Button handleClick={() => addValue(bad, setBad)} text='bad' />
      
      <Statistics stats={statistics} />

    </div>
  )
}
export default App