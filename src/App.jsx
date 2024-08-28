
import './App.css'


import Type from './components/Type'
import Nav from './components/Nav'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'
import Foot from './components/Foot'
import Review from './components/Review'
import ImageSlider from './components/ImageSlider'
import Services from './components/Services'
import Cources from './components/Cources'
import Biocourses from './components/Biocourses'




function App() {

  return (
    <>
      <div className='bg-backgound'>
        <Nav />
        <Biocourses/>
        <Cources />
        <ImageSlider />
        <Type />
        <Services />
        <SelectedStudents />
        <Review />
        <HiringPertners />
        <Foot />


      </div>
    </>
  )
}

export default App