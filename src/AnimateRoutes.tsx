import { Route, Routes, useLocation } from 'react-router-dom'

import { AboutPage, ContactPage, HomePage, WorkPage } from './pages'
import MainLayout from './layouts/MainLayout'
import { AnimatePresence } from 'framer-motion'

const AnimateRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />}/>
                <Route path='about' element={<AboutPage />}/>
                <Route path='work' element={<WorkPage />}/>
                <Route path='contact' element={<ContactPage />}/>
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes