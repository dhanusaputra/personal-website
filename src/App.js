import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LangFilter from './components/LangFilter'

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <LangFilter />
      <div>nothing personal here</div>
    </BrowserRouter>
  )
}

export default App
