import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => { setBad(bad + 1) }} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App