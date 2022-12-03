import { useEffect, useState } from 'react'
import Filter from './Filter'
import Notification from './Notification';
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
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('success')


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

  const sendNotification = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification(null)
    }, 5000)
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
            sendNotification(`Updated ${person.name}`, 'success')
            return p.id === person.id ? person : p
          }
          ))
        }).catch(() => {
          sendNotification(`Person ${foundPerson.name} was already deleted from server.`, 'error');
        })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      create(newPerson).then(person => {
        setPersons(persons.concat(person))
        sendNotification(`Added ${person.name}`, 'success')
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
      <Notification message={notification} type={notificationType} />
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