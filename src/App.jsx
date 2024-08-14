
import './App.css'
import Navbar from './components/Navbar'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'

function App() {

  return (
    <>
      <div className='bg-backgound'>
      <Navbar />
      <SelectedStudents />
      <HiringPertners />
      </div>
    </>
  )
}

export default App
