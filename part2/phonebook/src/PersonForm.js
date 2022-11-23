const PersonForm = ({ onAddPerson, onNameChange, onNumberChange }) => {
    return <form onSubmit={onAddPerson}>
        <div>name: <input onInput={onNameChange} /></div>
        <div>number: <input onInput={onNumberChange} /></div>
        <div>
      <button type="submit">add</button>
    </div>
  </form>
}

export default PersonForm