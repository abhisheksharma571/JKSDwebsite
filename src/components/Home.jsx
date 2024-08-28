import React from 'react'
import ImageSlider from './ImageSlider'
import CounterWrapper from './CounterWrapper'
import Services from './Services'
import SelectedStudents from './SelectedStudents'
import Review from './Review'
import HiringPartners from './HiringPartners'
import Type from './Type'
import Adviser from './Adviser'

function Home() {
  return (
    <div>
      <div className='bg-backgound'>
      <ImageSlider />
      <Type />
      <CounterWrapper />
      <Services/>
      <SelectedStudents />
      <Review/>
      <Adviser />
      <HiringPartners />
      </div>
    </div>
  )
}

export default Home
