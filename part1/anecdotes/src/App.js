import React, { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  
  const len = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(len).fill(0))
  
  const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min) + min)
  const addVote = (values, setter, i) => {
    const copy = [...values]
    copy[i] += 1
    setter(copy)
  }
  let maxVotes = Math.max(...votes)
  let maxVotesIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => addVote(votes, setVotes, selected)} text='vote' />
      <Button handleClick={() => setSelected(() => getRandomIndex(0, len))} text='next anecdotes' />
      <h1>Anectode with most vote</h1>
      {anecdotes[maxVotesIndex]}
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App