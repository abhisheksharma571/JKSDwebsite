import React from 'react'
import ImageSlider from './ImageSlider'
import CounterWrapper from './CounterWrapper'
import Services from './Services'
import SelectedStudents from './SelectedStudents'
import Review from './Review'
import HiringPartners from './HiringPartners'
import Adviser from './Adviser'
import Type from './Type'
import ScrollProgress from './ScrollProgress'


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
      <HiringPartners />
      <Adviser />
      <ScrollProgress />
      </div>
    </div>
  )
}

export default Home
