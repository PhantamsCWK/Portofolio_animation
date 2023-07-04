import { useEffect, useState } from 'react'

const useMediaQuery = (media: string) => {
    const getMatches = (query: string)=> {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
          return window.matchMedia(query).matches
        }
        return false
    }

    const [isMobile, setIsMobile] = useState<boolean>(getMatches(media));


    useEffect(() => {
      const mediaQuery = window.matchMedia(media);
  
      setIsMobile(getMatches(media))
  
      const handleMediaQueryChange = () => {
        setIsMobile(getMatches(media))
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange)
  
      return () => {
        mediaQuery.removeEventListener('change', 
        handleMediaQueryChange)
      }
    }, [media])

    return isMobile
}

export default useMediaQuery