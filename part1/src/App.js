import React, { useState } from 'react'

const Header = ({ text }) => {
	return (
		<h1>{text}</h1>
	)
}

const Statistics = ({ text, value }) => {
	return ( 
		<p>{text} {value} </p>
	)

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

	const handleGoodClick = () => setGood(good + 1)
	const handleNeutralClick = () => setNeutral(neutral + 1)
	const handleBadClick = () => setBad(bad + 1)

	const total = good + bad + neutral
	const sum = good + (bad * -1) // bad is weighted as -1 in the set

  return (
    <div>
	  <Header text="Give Feedback"/>
		<button onClick={handleGoodClick}>good</button>
		<button onClick={handleNeutralClick}>neutral</button>
		<button onClick={handleBadClick}>bad</button>
	  <Header text="Statistics"/>
	  <Statistics text="good" value={good}/>
	  <Statistics text="neutral" value={neutral}/>
	  <Statistics text="bad" value={bad}/>
	  <Statistics text="average" value={sum/total}/>
	  <Statistics text="postive" value={good/total}/>
    </div>
  )
}

export default App
