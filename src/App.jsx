import { useState } from 'react'
import Canvas from './canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer'


function App() {

  return (
    <main class="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  )
}

export default App
