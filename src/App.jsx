
import './App.css'
import Nav from './components/Nav'
import Foot from './components/Foot'
import { Outlet, useLocation } from 'react-router-dom'




function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404' || location.pathname === '*';

  return (
    <>
      <div className='bg-backgound'>
      {!isNotFoundPage && <Nav />}
      <Outlet />
      {!isNotFoundPage && <Foot />}
      </div>
    </>
  )
}

export default App