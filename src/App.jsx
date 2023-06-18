import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Tech, Works, ParticlesCanvas, HookFish } from "./components"
import { useDeviceDetect } from './hooks'

const App = () => {
  const [ warning, setWarning ] = useState(false)
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {
        isMobile && !warning && (
          <section className='fixed w-full h-[100vh] z-50'>
            <div onClick={() => setWarning(true)} className='flex justify-center items-center bg-gray-900 bg-opacity-95 w-full h-full'>
              <div className='flex flex-col justify-start items-center bg-tertiary w-8/12 py-10 gap-5'>
                <h1 className=' text-4xl text-yellow-400'>Warning!</h1>
                <p className='text-center'>
                  for some reason user who using mobile device i recomended you for using laptop or higher for better experience
                </p>
                <button className='text-blue-700'>Click Anyware</button>
              </div>
            </div>
          </section>
        )
      }
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
    </>
  )
}

export default App