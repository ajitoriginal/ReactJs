import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function MyForm() {
  const [inputs, setInputs] = useState({
    firstName: "Tony",
    lastName: "Stark"
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Current Values: First Name: ${inputs.firstName}, Last Name: ${inputs.lastName}`)
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
      <p>
        Current Values: First Name: {inputs.firstName}, Last Name: {inputs.lastName}
      </p>
      <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
