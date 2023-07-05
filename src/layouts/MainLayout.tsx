import { Outlet } from 'react-router-dom'
import { HookFish, Navbar, TransitionEffect } from '../components'

const MainLayout = () => {
  return (
    <div className='relative bg-primary h-full z-0'>
        <HookFish />
        <Navbar />
        {/* right */}
        <TransitionEffect />
        <Outlet />
    </div>
  )
}

export default MainLayout