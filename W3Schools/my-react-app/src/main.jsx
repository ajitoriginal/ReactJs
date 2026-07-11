import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function MyForm() {
  const [inputs, setInputs] = useState({
    firstName: 'John',
    lastName: 'Wick',
    tomato: true,
    onion: false
  })
  const handleChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.type === "checkbox" ? target.checked : target.value
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = (e) => {
    
    const flavour = inputs.tomato && inputs.onion ? 'Tomato & Onion' :
                    inputs.tomato ? 'Tomato' :
                    inputs.onion ? 'Onion' :
                    'Plain'
    alert(`Current Values: First Name: ${inputs.firstName}, Last Name: ${inputs.lastName}, Flavour: ${flavour}`)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <p>Choose burger option</p>
      <label>
        Tomato:
        <input
          type="checkbox"
          name="tomato"
          checked={inputs.tomato}
          onChange={handleChange}
        />
      </label>
      <label>
        Onion:
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>
      <p>
        Current Values: First Name: {inputs.firstName}, Last Name: {inputs.lastName}, Flavour: {
          inputs.tomato && inputs.onion ? 'Tomato & Onion' :
          inputs.tomato ? 'Tomato' :
          inputs.onion ? 'Onion' :
          'Plain'
        }
      </p>
      <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
