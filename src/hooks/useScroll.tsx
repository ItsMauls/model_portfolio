'use client'

import { useEffect, useState } from "react"

const useScroll = () => {
    const [isVisible, setIsVisible] = useState(false)
    console.log(isVisible)
    const handleScroll = () => {
        const scrollPosition = window.scrollY
        if(scrollPosition > 100) setIsVisible(true)
        else setIsVisible(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return {
        isVisible
    }
}

export default useScroll