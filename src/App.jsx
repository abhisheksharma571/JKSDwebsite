
import './App.css'

import Type from './components/Type'
import Navbar from './components/Navbar'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'

function App() {

  return (
    <>
      <div className='bg-backgound'>

      <Navbar />
      <Type />
      <SelectedStudents />
      <HiringPertners />
      </div>
    </>
  )
}

export default App
