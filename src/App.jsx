
import './App.css'


import Type from './components/Type'
import Nav from './components/Nav'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'
import Foot from './components/Foot'

import Nav from './components/Nav'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'
import Review from './components/Review'
import ImageSlider from './components/ImageSlider'
import Foot from './components/Foot'
import Services from './components/Services'


 upstream/main

function App() {

  return (
    <>

      <div className='bg-backgound'>


      <Nav />
      <Type />

      <Nav />
      <ImageSlider />
      <Services/>
 
      <SelectedStudents />
      <Review/>
      <HiringPertners />

      <Foot/>
      </div>
    </>
  )
}

export default App