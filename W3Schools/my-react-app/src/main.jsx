import {createRoot} from 'react-dom/client'

function MissedGoal() {
  return <h1>MISSED!</h1>
}

function MadeGoal() {
  return <h1>Goal!</h1>
}
function Goal({isGoal}) {
  return (
    <>{isGoal ? <MadeGoal/> : <MissedGoal />}</>
  )
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={true}/>
)