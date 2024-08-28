
import './App.css'

import Nav from './components/Nav'
import Foot from './components/Foot'
<<<<<<< HEAD
import Review from './components/Review'
import ImageSlider from './components/ImageSlider'
import Services from './components/Services'
import Cources from './components/Cources'
import Biocourses from './components/Biocourses'
=======
import { Outlet, useLocation } from 'react-router-dom'

>>>>>>> 47fcf3aa30a88daf71d9dc413d996da569087fcd




function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404' || location.pathname === '*';

  return (
    <>
      <div className='bg-backgound'>
<<<<<<< HEAD
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
=======
>>>>>>> 47fcf3aa30a88daf71d9dc413d996da569087fcd

      {!isNotFoundPage && <Nav />}
      <Outlet />
      {!isNotFoundPage && <Foot />}

      </div>
    </>
  )
}

export default App