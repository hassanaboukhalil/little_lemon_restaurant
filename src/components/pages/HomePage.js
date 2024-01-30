import React from 'react'
import Main from '../layout/Main'
import Hero from '../others/Hero'
import Highlights from '../others/Highlights'
import Testimonials from '../others/Testimonials'
import About from '../others/About'

function HomePage() {
  return (
    <>
        <Main>
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
        </Main>
    </>
  )
}

export default HomePage