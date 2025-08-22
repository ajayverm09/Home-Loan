import React from 'react'
import Hero from '../components/HomeHero'
import AppointmentSection from '../components/Appointment'
import HomeAbout from '../components/Homeabout'
import HomeProgram from '../components/Homeprogram'
import HomeStats from '../components/HomeStats'
import Homechoose from '../components/Homechoose'
import HomePartner from '../components/HomePartner'
import HomeTeam from '../components/HomeTeam'
import HomeTestimonial from '../components/HomeTestimonial'
import HomeFaq from '../components/HomeFaq'
import HomeBlog from '../components/HomeBlog'
const Home = () => {
  return (
    <div>
      <Hero/>
      <AppointmentSection/>
      <HomeAbout />
      <HomeProgram/>
      <HomeStats/>
      <Homechoose/>
      <HomePartner/>
      <HomeTeam/>
      <HomeTestimonial/>
      <HomeBlog/>
      <HomeFaq/>
    </div>
  )
}

export default Home