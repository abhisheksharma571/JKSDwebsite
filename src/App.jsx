import { useState } from 'react'
import './App.css'
import Services from'./components/Services'
import Review from './components/Review'

function App() {

  return (
    <>
    <div className='bg-bgColor'> 
      <Services/>
      <Review/>
    </div>
      
    </>
  )
}

export default App
