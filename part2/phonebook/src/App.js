import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import {
  getAll,
  deletePerson,
  create,
  update
} from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    getAll().then(allPersons => setPersons(allPersons));
  }, [])

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
    const foundPerson = persons.find(isHaveName)

    if (foundPerson) {
      if (window.confirm(`${newName} is already added to phonebook, repalce the old number with a new one?`)) {
        const newPerson = {
          ...foundPerson,
          number: newNumber
        }
        update(foundPerson.id, newPerson).then(person => {
          setPersons(persons.map(p => {
            return p.id === person.id ? person : p
          }
          ))
        }).catch(() => {
          alert(`Person ${foundPerson.name} was already deleted from server.`)
        })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      create(newPerson).then(person => {
        setPersons(persons.concat(person))
      })
    }
  }

  const handleDeletePerson = id => {
    deletePerson(id).then(() => {
      setPersons(persons.filter(person => person.id !== id));
    }) 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onInput={handleFilterChange} />
      <h3>Add a new:</h3>
      <PersonForm
        onAddPerson={handleAddPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons()} onDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App