import {createRoot} from 'react-dom/client'

function Football() {
  const shoot = (a, e) => {
    alert(a)
    alert(e.type)
    
  }
  return (
    <button onClick={(event) => shoot('Goal', event)}>Take the shot!</button>
  )
}

createRoot(document.getElementById('root')).render(
  <Football />
)