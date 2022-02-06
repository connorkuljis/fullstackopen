import React, { useState } from 'react'

const Header = ({ text }) => {
	return (
		<h1>{text}</h1>
	)
}

const Button = ({ handler, text } ) => {
    return (
	<button onClick={handler}>{text}</button>
    )


}

const StatisticLine = ({ text, value } ) => {
    return (
	<tr>
	    <td>{text}</td>
	    <td>{value}</td>
	</tr>
    )
}


const Statistics = ({ good, neutral, bad }) => {
	const total = good + bad + neutral
	const sum = good + (bad * -1) // bad is weighted as -1 in the set

	if (total === 0)
	{
		return (
			<div>No feedback given.</div>
		)
	}
	return ( 
		<table>
		    <tbody>
			<StatisticLine text="good" value ={good} />
			<StatisticLine text="neutral" value ={neutral} />
			<StatisticLine text="bad" value ={bad} />
			<StatisticLine text="average" value ={sum/total} />
			<StatisticLine text="positive" value ={good/total*100 + " %"} />
		    </tbody>
		</table>
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


    return (
	<div>
	    <Header text="give feedback"/>
		<Button handler={handleGoodClick} text="good" />
		<Button handler={handleNeutralClick} text="neutral" />
		<Button handler={handleBadClick} text="bad" />
	    <Header text="statistics"/>
	    <Statistics good={good} neutral={neutral} bad={bad} />
	</div>
    )
}

export default App

















