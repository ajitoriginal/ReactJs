import { createRoot } from 'react-dom/client'
const fruitlist = ['apple', 'banana', 'cherry'];

const kwtohp = (kw) => kw * 1.36

function Car() {
  const myObj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h2>My Car</h2>
      <p>It is a {myObj.color} {myObj.name} & {myObj.model}</p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  // <App />
  <Car />
  // myElement
)
