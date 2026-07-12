import {createRoot} from 'react-dom/client'
import {useState} from 'react'
import './MyStylesheet.css'


const MyHeader = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1>Hellow style!</h1>
      <p>Add a little style!</p>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <MyHeader />
);