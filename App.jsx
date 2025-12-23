import React from 'react'
import  StickyNavbar  from './components/StickyNavbar'
import Hero from './components/Hero'
import './style.css'
import AboutSection from './components/AboutSection'
import SideDishSection from './components/SideDishSection'
import UpcomingEventsSection from './components/UpcomingEvents'
import IngredientsSection from './components/IngredientsSection'
import ReservationSection from './components/ReservationSection'

const App = () => {
  return (
    <>
    <div>
      <StickyNavbar/>
      <Hero/>
      <AboutSection/>
      <SideDishSection/>
      <UpcomingEventsSection/>
      <IngredientsSection/>
      <ReservationSection/>
      <div className="page-scroll-space"></div>
    </div>
    </>
  )
}

export default App
