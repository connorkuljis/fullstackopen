import React, { useState } from 'react'

const Button = ({ handler, text } ) => {
    return (
	<button onClick={handler}>{text}</button>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming wihout an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const [mostVotesIndex, setMostVotesIndex] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])


  const handleSelectedClick = () => {
      const min = 0
      const max = anecdotes.length
      var rand = Math.floor(Math.random() * (max - min) + min)
      console.log(rand) 						// TODO: remove debug
      setSelected(rand)
  }

  const handleVote = () => {
      const copy = [...points] 	// basically useState objects are immutable
      copy[selected] += 1 	// have to read them into a variable. edit contents of that variable, and set it to the new array
      setPoints(copy)
      console.log(copy)
      // cool
      //
      // calc the most votes index
      const max = Math.max(...copy)
      const i   = copy.indexOf(max)
      setMostVotesIndex(i)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the Day</h1>
	{anecdotes[selected]}
        <p>has {points[selected]} votes</p>
        <Button handler={handleVote} text="vote" />
        <Button handler={handleSelectedClick} text="next anecdote" />
      </div>
      <div>
        <h1>Anecdote with the most votes </h1>
        <div>{anecdotes[mostVotesIndex]}</div>
        
      </div>
    </div>
  )
}

export default App
