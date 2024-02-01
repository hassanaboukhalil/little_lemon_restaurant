import { Center, Grid } from '@chakra-ui/react'
import React from 'react'
import Rater from './Rater'

function Testimonials() {
  return (
    <section className='section3'>
      <div className='testimonials container'>
        <Center className='title' as='b'>Testimonials</Center>
        <Grid className='raters' templateColumns='auto' paddingX='2rem' spacing='2.94rem' justifyItems='center'>
            <Rater />
            <Rater />
            <Rater />
            <Rater />
        </Grid>
      </div>
    </section>
  )
}

export default Testimonials