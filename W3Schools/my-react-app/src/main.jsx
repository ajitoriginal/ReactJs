import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo")
  const handleChange = (e) => setMyCar(e.target.value)
  // const handleSubmit = (e) => {
  //   e.preventDefault(e)
  //   alert(myTxt)
  // }
  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <label>
        Chhose here:
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Flat">Flat</option>
        </select>
      </label>
      <p>Current Value : {myCar}</p>
        {/* <input type="submit"/> */}
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
