import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')  
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
	console.log('promise fulfilled')  
	setPersons(response.data)
    })
  }, [])

  const personsToShow = newFilter.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons

  const addName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const newPerson = { 
      name: newName, 
      number: newNumber
    }
    if (persons.filter(s => s.name === newPerson.name).length > 0) {
      alert(newPerson.name + " is already added to phonebook")
    }
    else {
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(personsToShow)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
     
      <h3>Add a new</h3>

      <PersonForm
	addName={addName}
	newName={newName}
	newNumber={newNumber}
	handleNameChange={handleNameChange}
	handleNumberChange={handleNumberChange}
      />
	

      <h3>Numbers</h3>

      <Persons persons={persons} personsToShow={personsToShow} />

    </div>
  )
}

export default App
