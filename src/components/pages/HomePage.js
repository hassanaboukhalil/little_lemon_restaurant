import React from 'react'
import Main from '../layout/Main'
import Hero from '../others/Hero'
import Highlights from '../others/Highlights'
import Testimonials from '../others/Testimonials'

function HomePage() {
  return (
    <>
        <Main>
          <Hero />
          <Highlights />
          <Testimonials />
        </Main>
    </>
  )
}

export default HomePage