import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <div>nothing personal here</div>
    </BrowserRouter>
  )
}

export default App
