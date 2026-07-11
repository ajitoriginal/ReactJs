import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function MyForm() {
  const [myTxt, setMyTxt] = useState("")
  const handleChange = (e) => setMyTxt(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault(e)
    alert(myTxt)
  }
  return (
    <form onSubmit={handleSubmit}>
    {/* <form> */}
      <label>
        Write here:
        <textarea
          value={myTxt}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <p>Current Value : {myTxt}</p>
      <input type="submit"/>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
