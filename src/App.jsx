import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Board from './components/Board'
import Fleet from './components/Fleet'
import './styles/Board.css'
import './styles/Fleet.css'

function App() {
const config = {
    shipSizes: [2, 3, 3, 4, 5],
    rows: 10,
    columns: 10,
}

const [gameState, setGameState] = useState('start')
const [shipSelected, setShipSelected] = useState (0)

return (
    <main>
      <Board 
          gameState={gameState}
          rows={config.rows} 
          columns={config.columns}/>

      <Fleet  
          config={config}
          gameState={gameState}
          setGameState={setGameState}
          setShipSelected={setShipSelected}
          
          />
    </main>
  )
}

export default App
