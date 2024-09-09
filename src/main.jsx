import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
import ContactUs from './pages/Contact/ContactUs.jsx'
import AboutUs from './pages/About/AboutUs.jsx'
import Courses from './pages/Courses/Courses.jsx'
import Services from './pages/Services/Services.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx'
import Faq from './pages/FAQ/Faq.jsx'
// import Biocourses from './components/Biocourses.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='courses' element={<Courses />} />
      <Route path='services' element={<Services />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='faq' element={<Faq />} />
      {/* <Route path='/biocourse' element={<Biocourses />} /> */}
      <Route path='404' element={<PageNotFound />} />
      <Route path='*' element={<Navigate to="/404" replace />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
