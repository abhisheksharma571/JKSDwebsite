
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import DataVisual from './components/DataVisual'
import SelectedStudents from './components/SelectedStudents'

function App() {

  return (
    <>
      <div className='bg-backgound'>
      <Navbar />
      <SelectedStudents />
      </div>
    </>
  )
}

export default App
