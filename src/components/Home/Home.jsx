import React from 'react'
import Hero_home from './Hero_home'
import StatsSection from './StateSection'
import Testimonials from './Testimonials'
import CTASection from './CTASection'
import WhyChooseSection from './WhyChooseSection'
import MyWork from './MyWork'

function Home() {
  return (
    <div>

        <Hero_home />
        <StatsSection />
        <MyWork />
        
        <Testimonials />
        <WhyChooseSection />
        <CTASection />
    </div>
  )
}

export default Home