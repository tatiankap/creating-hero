import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [superPower, setSuperPower] = useState('')
  const [displayCharacter, setDisplayCharacter] = useState(false)

  return (
    <div className='app'>
      <h1>Build a hero</h1>
      <div>
        <label htmlFor="">Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="">Age: </label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="">Heigh: </label>
        <input type="text" onChange={(e) => setHeight(e.target.value)} />
        <label htmlFor="">SuperPower: </label>
        <input type="text" onChange={(e) => setSuperPower(e.target.value)} />
      </div>
      <button onClick={() => setDisplayCharacter(true)}>Display Character</button>
      <div>
        <h2>Hero Info</h2>
        {
          displayCharacter && <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>SuperPower: {superPower}</li>
          </ul>
        }
      </div>

    </div>
  )
}

export default App
