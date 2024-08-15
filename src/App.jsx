
import './App.css'
import Nav from './components/Nav'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'
import ImageSlider from './components/ImageSlider'
import Foot from './components/Foot'


function App() {

  return (
    <>
      <div className='bg-backgound'>
      <Nav />
      <ImageSlider />
      <SelectedStudents />
      <HiringPertners />
      <Foot />
      </div>
    </>
  )
}

export default App