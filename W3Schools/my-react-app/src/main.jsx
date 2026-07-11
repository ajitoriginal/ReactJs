import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function MyForm() {
  const [name, setName] = useState("")
  const handleChange = (e) => setName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault(e)
    alert(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Name:
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <p>Current Value : {name}</p>
      <input type="submit"/>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
