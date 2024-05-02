'use client'
import { ReactNode } from 'react';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'

interface ParallaxType {
    children : ReactNode
    speed? : number
    translateY? : any
}

export const ParallaxComp = ({children, speed = 25, ...props} : ParallaxType) => {
    return (
        <ParallaxProvider>
            <Parallax speed={speed} {...props }>
                {children}
            </Parallax>
         </ParallaxProvider>
    )
}