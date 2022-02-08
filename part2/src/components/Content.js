import React from 'react'
import Part from './Part'

// this is our list render
 
const Content = ({ parts }) => {
    const total = parts.reduce(function(sum, part){
	return sum + part.exercises
    }, 0)

    return (
	<div>
	    <div>
		{parts.map(part => 
		  <Part key={part.id} part={part} />
		)}
	    </div>
	    <b>total of {total} exercises</b>
	</div>
    )
}

export default Content

