import Meal from './components/Meal'
import { useState } from 'react'

const App = () => {
  return (
    <div>
      <h1> What should I eat? </h1>
      <div className="underline"></div>
      <Meal />
    </div>
  )
}

export default App
