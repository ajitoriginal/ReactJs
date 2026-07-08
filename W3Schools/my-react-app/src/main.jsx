import { createRoot } from 'react-dom/client'
const fruitlist = ['apple', 'banana', 'cherry'];

function Car() {
  const brand = "Ford";
  const model = "Mustang";
  return (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}</p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  // <App />
  <Car />
  // myElement
)
