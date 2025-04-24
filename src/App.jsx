import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './rotas/rotas'
import './App.css'
import { Inicial } from "./paginas/inicial"

function App() {

  return (
    <BrowserRouter>
      <Rotas/>    
    </BrowserRouter>
  )
}

export default App
