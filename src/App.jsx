
import './App.css'

import Type from './components/Type'
import Nav from './components/Nav'
import HiringPertners from './components/HiringPertners'
import SelectedStudents from './components/SelectedStudents'
import Foot from './components/Foot'

function App() {

  return (
    <>
      <div className='bg-backgound'>

      <Nav />
      <Type />
      <SelectedStudents />
      <HiringPertners />
      <Foot/>
      </div>
    </>
  )
}

export default App
