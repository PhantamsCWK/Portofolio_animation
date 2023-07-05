import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useDeviceDetect } from './hooks'
import AnimateRoutes from './AnimateRoutes'



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
              <AnimateRoutes />
          </BrowserRouter>
        )
      }
      
    </>
  )
}

export default App