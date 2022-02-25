import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

/**
 * get data from : https://restcountries.com/v3.1/all
 *
 * The user interface is very simple. The country to be shown is found by
 * typing a search query into the search field.
 *
 * If there are too many (over 10) countries that match the query, then the user
 * is prompted to make their query more specific:
	{countries.map(country => 
	  <Country key={country.name.common} country={country} />
 */

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
      .then(response => {
	setCountries(response.data)
	console.log(response.data)  
      })
  }, [])

  const handleSearchWordChange = (event) => {
    const temp = countries.filter(country => country.name.common.toLowerCase().includes(searchWord.toLowerCase()))
    console.log(temp.length)  
    setSearchWord(event.target.value)
    setCount(temp)


  }

  const countriesToShow = searchWord.length > 0
    ? countries.filter(country => country.name.common.toLowerCase().includes(searchWord.toLowerCase()))
    : []


  return (
    <div>
      <form>
	find countries 
	<input value={searchWord} onChange={handleSearchWordChange}/>
      </form>
    <ul>
      {countriesToShow.map(country => 
	<Country key={country.name.common} country={country} /> )}
    </ul>
    </div>
  )
}

export default App

