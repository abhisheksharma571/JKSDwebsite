import React from 'react'
import ImageSlider from './ImageSlider'
import CounterWrapper from './CounterWrapper'
import Services from './Services'
import SelectedStudents from './SelectedStudents'
import Review from './Review'
import HiringPartners from './HiringPartners'

function Home() {
  return (
    <div>
      <div className='bg-backgound'>
      <ImageSlider />
      <CounterWrapper />
      <Services/>
      <SelectedStudents />
      <Review/>
      <HiringPartners />
      </div>
    </div>
  )
}

export default Home
