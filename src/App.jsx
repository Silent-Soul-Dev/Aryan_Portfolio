import { useState } from 'react'
import Dock from './Dock/Dock'
import Filemanager from './FileManager/Filemanager'
import './App.css'

function App() {

  return (
    <div className='flex items-center justify-center h-full' >
      <Dock />
    </div>
  )
}

export default App;