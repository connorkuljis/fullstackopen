import React from 'react'
import Part from './Part'

// this is our list render
 
const Content = ({ parts }) => {
    return (
	<ul>
	{parts.map(part => 
          <Part key={part.id} part={part} />
        )}
	</ul>
    )
}

export default Content

