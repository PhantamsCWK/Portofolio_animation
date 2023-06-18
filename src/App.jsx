import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Tech, Works, ParticlesCanvas, HookFish } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <HookFish />
        <div className=' bg-gradient-to-b from-blue-700 via-blue-900 to-primary'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='bg-gradient-to-t from-red-500'>
          <Contact />
        </div>
        <ParticlesCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App