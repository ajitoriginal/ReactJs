import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function MyForm() {
  const [name, setName] = useState("")
  const handleChange = (e) => setName(e.target.value)
  return (
    <form>
      <label>
        Enter Your Name:
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <p>Current Value : {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
