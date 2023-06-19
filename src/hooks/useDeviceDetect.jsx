import React, { useEffect } from 'react'

const useDeviceDetect = () => {
    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    const isTabDevice = () => {
        return /iPad|Android|Tablet/i.test(navigator.userAgent);
    }

    const isComputerDevice = () => {
        return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

  return { isMobile: isMobileDevice(), isTab: isTabDevice(), isComputer: isComputerDevice() }
}

export default useDeviceDetect