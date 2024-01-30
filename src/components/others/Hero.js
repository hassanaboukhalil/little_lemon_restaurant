import React from 'react'

function Hero() {
  return (
    <section className='section1'>
      <div className='hero container'>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className='btn'>Reserve a table</button>
        </div>
        <img src='./images/hero.png' alt='first-img' />
      </div>
    </section>
  )
}

export default Hero