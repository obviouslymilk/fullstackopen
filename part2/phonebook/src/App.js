import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = e => {
    setNewName(e.target.value);
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  }

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  const filterPersons = () => {
    if (filter === '')
      return persons;
    
    return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const handleAddPerson = e => {
    e.preventDefault();

    const isHaveName = element => element.name === newName;

    if (persons.find(isHaveName))
      return alert(`${newName} is already in the phonebook`)

    setPersons(persons.concat({
      name: newName,
      number: newNumber
    }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onInput={handleFilterChange} />
      <h3>Add a new:</h3>
      <PersonForm onAddPerson={handleAddPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons()} />
    </div>
  )
}

export default App