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
import DigitalMarketing from './pages/Courses/DigitalMarketing.jsx'
import DataAnalytics from './pages/Courses/DataAnalytics.jsx'
import BusinessAnalyst from './pages/Courses/BusinessAnalyst.jsx'
import Embedded from './pages/Courses/Embedded.jsx'
import GraphicDesigning from './pages/Courses/GraphicDesigning.jsx'
import Iot from './pages/Courses/Iot.jsx'
import Python from './pages/Courses/Python.jsx'
import Robotics from './pages/Courses/Robotics.jsx'


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
      <Route path='digitalmarketing' element={<DigitalMarketing/>} />
      <Route path='dataanalytics' element={<DataAnalytics/>} />
      <Route path='businessanalyst' element={<BusinessAnalyst/>} />
      <Route path='embedded' element={<Embedded/>} />
      <Route path='graphicdesigning' element={<GraphicDesigning/>} />
      <Route path='iot' element={<Iot/>} />
      <Route path='python' element={<Python/>} />
      <Route path='robotics' element={<Robotics/>} />
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
