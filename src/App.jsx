
import './App.css'

import Nav from './components/Nav'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'
import Review from './components/Review'
import ImageSlider from './components/ImageSlider'
import Foot from './components/Foot'
import Services from './components/Services'
import Adviser from'./components/Adviser'




function App() {

  return (
    <>

      <div className='bg-backgound'>
      <Nav />
      <ImageSlider />
      <Services/>
      <SelectedStudents />
      <Review/>
      <HiringPertners />
      <Adviser />
      <Foot />
      </div>
    </>
  )
}

export default App