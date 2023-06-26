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
        isMobile && !warning ? (
          <section className='fixed w-full h-[100vh] z-50'>
            <div onClick={() => setWarning(true)} className='flex justify-center items-center bg-gray-900 bg-opacity-95 w-full h-full'>
              <div className='flex flex-col justify-start items-center bg-tertiary w-8/12 p-10 gap-5'>
                <h1 className=' text-4xl text-yellow-400'>Warning!</h1>
                <p className='text-center'>
                  because the size of webiste user who using mobile device i recomended you for using laptop or higher for better experience
                </p>
                <button className='text-blue-700'>Click Anyware</button>
              </div>
            </div>
          </section>
        ) : (
          <BrowserRouter>
            <div className='bg-primary'>
              <HookFish />
              <div className='z-20 bg-gradient-to-b from-blue-700 via-blue-900 to-primary'>
                <Navbar />
                <Hero />
              </div>
                <About />
                <Experience />
                <Tech />
                <div className=' relative z-10'>
                <Works />
                </div>
                <div className='relative bg-gradient-to-t from-red-500 z-0'>
                  <Contact />
                  <ParticlesCanvas />
                </div>
            </div>
          </BrowserRouter>
        )
      }
      
    </>
  )
}

export default App