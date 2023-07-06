import { Route, Routes, useLocation } from 'react-router-dom'

import { AboutPage, ContactPage, Error404, HomePage, WorkPage } from './pages'
import MainLayout from './layouts/MainLayout'
import { AnimatePresence } from 'framer-motion'
// import { lazy } from 'react'

// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));
// const Error404 = lazy(() => import("./pages/Error404"));
// const HomePage = lazy(() => import("./pages/HomePage"));
// const Work = lazy(() => import("./pages/Work"));

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
                <Route path='*' element={<Error404 />}/>
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes