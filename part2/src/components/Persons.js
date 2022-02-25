import Person from './Person'
const Persons = ( { persons, personsToShow } ) => {
  return (
      <div>
	  {personsToShow.map(person => 
	    <Person key={person.name} person={person} /> 
	  )}
      </div>
  )
}
export default Persons
