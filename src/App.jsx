/*
//import reactLogo from './assets/react.svg'//import viteLogo from '/vite.svg'
import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  const [valor, actual] = useState(0)

  function s(){
    if(valor >= 0){
      actual(valor + 1)
    }
  }
  function r(){
    if(valor <= 0){
      actual(valor - 1)
    }
  }


  const nombre = useRef("lucca")

  const cam = () => {
    console.log(nombre.current)
  }

  useEffect(() => {
    document.title = 'Nuevo título';
  }, [])

  return (
    <>
      <button onClick={r}>-</button>
      <p>{valor}</p>
      <button onClick={s}>+</button>
      <div>
        <button ref={cam}>click</button>
      </div>
    </>
  )
  

}


export default App*/


