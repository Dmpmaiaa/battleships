import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import './styles/Board.css'

function App() {


  return (
    
    <Board rows={10} columns={10}/>
  )
}

export default App
